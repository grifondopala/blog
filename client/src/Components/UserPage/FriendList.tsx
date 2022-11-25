import * as React from 'react'
import './FriendList.css'
import {User} from "../../Models/models";

const REACT_APP_SERVER = process.env["REACT_APP_SERVER"];

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
                <img id={'photoFriend'} src={`${REACT_APP_SERVER}/${propsFriend.user.avatar_src}`}/>
                <a href={`/user/${propsFriend.user.id}`}
                   id={'usernameFriend'}>{propsFriend.user.first_name} {propsFriend.user.last_name}</a>
            </div>
        )
    }

    return (
        <div id={'mainFriendListDiv'}>
            <div id={'contentFriendListDiv'}>
                <p id={'titleFriendList'}>Список друзей</p>
                {props.friendList && (
                    <p id={'titleFriendList'}>Пусто</p>
                )}
                {props.friendList?.map((user) => (
                    <FriendDiv user={user}/>
                ))}
            </div>
        </div>
    )

}