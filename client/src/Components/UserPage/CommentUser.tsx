import * as React from 'react'
import {Comment} from '../../Models/models'
import './CommentUser.css'

interface CommentUserProps{
    readonly comment: Comment;
}

export function CommentUser(props: CommentUserProps){

    return(
        <div id={'commentMainDiv'}>
            <img id={'commentUserPhoto'} src={`http://localhost:5000${props.comment.user.avatar_src}`}/>
            <div id={'commentTextDiv'}>
                <a href={`/${props.comment.user.id}`} id={'commentUserName'}>{props.comment.user.first_name} {props.comment.user.last_name}</a>
                <p id={'commentText'}>{props.comment.text}</p>
            </div>
        </div>
    )
}