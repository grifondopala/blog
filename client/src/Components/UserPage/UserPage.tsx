import * as React from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import {User} from '../../Models/models'
import {ProfileHeader} from "./ProfileHeader";
import './UserPage.css'
import {PostUser} from './PostUser';
import {WriteNewPost} from "./WriteNewPost";
import {FriendList} from "./FriendList";

const REACT_APP_SERVER = process.env["REACT_APP_SERVER"];

interface  UserPageProps{
    myId: number | null;
    myAvatarSrc: string | null;
}

export function UserPage(props: UserPageProps){

    const { userId } = useParams();

    const [user, setUser] = React.useState<User>();
    const [friendList, setFriendList] = React.useState<[User]>();

    React.useEffect(() => {
        updatePosts();
        getFriends();
    }, [userId])

    const updatePosts = () => {
        axios({method: 'get', url: `${REACT_APP_SERVER}/users/${userId}`}).then(res => {
            setUser(res.data);
        })
    }


    const getFriends = () => {
        axios({
            method: 'post',
            url: `${REACT_APP_SERVER}/users/getFriends/${userId}`
        }).then(res => {
            setFriendList(res.data.friends);
        })
    }

    return(
        <div>
            <div id='userPageMainDiv'>
                <div>
                    <ProfileHeader first_name={user?.first_name}
                                   last_name={user?.last_name}
                                   avatar_src={user?.avatar_src}/>
                    <FriendList friendList={friendList}/>
                </div>
                <div>
                    {props.myId && props.myId!.toString() === userId && (
                        <WriteNewPost myId={props.myId}
                                      updatePosts={updatePosts}/>)}
                    {user?.posts.map((post) => (
                        <PostUser key={post.id} userId={parseInt(userId!)}
                                  post={post}
                                  first_name={user?.first_name}
                                  last_name={user?.last_name}
                                  myId={props.myId}
                                  myAvatarSrc={props.myAvatarSrc}
                                  updatePosts={updatePosts}/>
                    ))}
                </div>
            </div>
        </div>
    )

}