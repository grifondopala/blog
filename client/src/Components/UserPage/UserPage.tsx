import * as React from 'react'
import {useParams} from "react-router-dom";
import axios from 'axios';
import {User} from '../../Models/models'
import {ProfileHeader} from "./ProfileHeader";
import './UserPage.css'
import {PostUser} from './PostUser';
import {WriteNewPost} from "./WriteNewPost";
import {FriendList} from "./FriendList";

interface  UserPageProps{
    myLogin: string;
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
        axios({method: 'get', url: `http://localhost:5000/users/${userId}`}).then(res => {
            setUser(res.data);
        })
    }

    const getFriends = () => {
        axios({
            method: 'post',
            url: `http://localhost:5000/users/getFriends/${userId}`
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
                    {props.myLogin === user?.login && (
                        <WriteNewPost myLogin={props.myLogin}
                                      updatePosts={updatePosts}/>)}
                    {user?.posts.map((post) => (
                        <PostUser key={post.id} loginUser={user?.login}
                                                post={post}
                                                first_name={user?.first_name}
                                                last_name={user?.last_name}
                                                myLogin={props.myLogin}
                                                updatePosts={updatePosts}/>
                    ))}
                </div>
            </div>
        </div>
    )

}