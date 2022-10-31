import * as React from 'react'
import './FriendList.css'
import axios from 'axios'
import {User} from "../../Models/models";

interface FriendListProps {
    readonly friendList: [User] | undefined;
}

interface FriendDivProps {
    readonly user: User;
}

export function FriendList(props: FriendListProps) {

    function FriendDiv(propsFriend: FriendDivProps) {
        return (
            <div id={'mainFriendDiv'}>
                <img id={'photoFriend'} src={`http://localhost:5000${propsFriend.user.avatar_src}`}/>
                <a href={`/user/${propsFriend.user.id}`}
                   id={'usernameFriend'}>{propsFriend.user.first_name} {propsFriend.user.last_name}</a>
            </div>
        )
    }

    return (
        <div id={'mainFriendListDiv'}>
            <div id={'contentFriendListDiv'}>
                <p id={'titleFriendList'}>Список друзей</p>
                {props.friendList?.map((user) => (
                    <FriendDiv user={user}/>
                ))}
            </div>
        </div>
    )

}