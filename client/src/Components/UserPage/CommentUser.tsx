import * as React from 'react'
import {Comment} from '../../Models/models'
import './CommentUser.css'
import axios from "axios";

const REACT_APP_SERVER = process.env["REACT_APP_SERVER"];

interface CommentUserProps{
    readonly comment: Comment;
    readonly myId: number | null;
}

export function CommentUser(props: CommentUserProps){

    const day = props.comment.createdAt.split('T')[0].split('-');
    const time = props.comment.createdAt.split('T')[1].split(':');

    const [liked, setLiked] = React.useState(props.comment.likedUsers.some((e) => e.user.id === props.myId))
    const [countLike, setCountLike] = React.useState(props.comment.likedUsers.length)

    function likeComment(){
        if(liked){
            setCountLike(countLike - 1)
        }else{
            setCountLike(countLike + 1)
        }
        setLiked(!liked);
        axios({
            method: 'post',
            url: `${REACT_APP_SERVER}/comments/like`,
            data: {userId: props.myId, commentId: props.comment.id}
        }).then(res => {
        })
    }

    return(
        <div id={'commentMainDiv'}>
            <img id={'commentUserPhoto'} src={`${REACT_APP_SERVER}/${props.comment.user.avatar_src}`}/>
            <div id={'commentTextDiv'}>
                <a href={`/user/${props.comment.user.id}`} id={'commentUserName'}>{props.comment.user.first_name} {props.comment.user.last_name}</a>
                <p id={'commentText'}>{props.comment.text}</p>
                <p>Оставлен: {day[2]}.{day[1]}.{day[0]} в {time[0]}:{time[1]}</p>
            </div>
            <div id={'commentLikeDiv'}>
                <img id={'commentLikePhoto'} src={liked ? '/icons/likeActivated.png' : '/icons/likeDisabled.png'} onClick={likeComment}/>
                <p>{countLike}</p>
            </div>
        </div>
    )
}