import * as React from 'react'
import {Post} from "../../Models/models";
import axios from 'axios';
import './PostUser.css'
import {CommentUser} from "./CommentUser";


const REACT_APP_SERVER = process.env["REACT_APP_SERVER"];

interface PostUserProp {
    post: Post;
    first_name: string;
    last_name: string;
    userId: number;
    myId: number | null;
    myAvatarSrc: string | null;

    updatePosts: () => void;
}

export function PostUser(props: PostUserProp) {

    const day = props.post.createdAt.split('T')[0].split('-');
    const time = props.post.createdAt.split('T')[1].split(':');

    const [liked, setLiked] = React.useState(props.post.likedUsers.some((e) => e.user.id === props.myId))
    const [countLike, setCountLike] = React.useState(props.post.likedUsers.length)
    const [countComment, setCountComment] = React.useState(props.post.comments.length)

    const [newCommentText, setNewCommentText] = React.useState('')

    const like = () => {
        liked ? setCountLike(countLike - 1) : setCountLike(countLike + 1);
        setLiked(!liked);
        axios({
            method: 'post',
            url: `${REACT_APP_SERVER}/posts/like`,
            data: {userId: props.myId, postId: props.post.id}
        }).then(res => { })
    }

    const deletePost = () => {
        axios({
            method: 'post',
            url: `${REACT_APP_SERVER}/posts/delete`,
            data: {postId: props.post.id}
        }).then(res => {
            props.updatePosts();
        })
    }

    const writeNewComment = () => {
        if (newCommentText.length > 0) {
            axios({
                method: 'post',
                url: `${REACT_APP_SERVER}/comments/create`,
                data: {postId: props.post.id, text: newCommentText, userId: props.myId}
            }).then(res => {
                setCountComment(countComment + 1);
                setNewCommentText('');
                props.updatePosts();
            })
        }
    }

    return (
        <div>
            <div className='postMainDiv'>
                <div className='postContentDiv'>
                    <div className='topPostDiv'>
                        <p className='nameUserPost'>{props.first_name} {props.last_name}</p>
                        {props.userId === props.myId && (
                            <img className='deletePostImg' src={'/icons/delete.png'} onClick={deletePost}/>
                        )}
                    </div>
                    <p className='timeCreateAt'>Создан {day[2]}.{day[1]}.{day[0]} в {time[0]}:{time[1]}</p>
                    <p className="textPost">{props.post.text}</p>
                    <div className='buttonsPostDiv'>
                        <div className='buttonDiv'>
                            <div onClick={like} className='buttonContentDiv'>
                                <img className='buttonPostPhoto'
                                     src={liked ? '/icons/likeActivated.png' : '/icons/likeDisabled.png'}></img>
                                <p className='buttonPostCounter'>{countLike}</p>
                            </div>
                        </div>
                        <div className='buttonDiv' style={{marginLeft: 20}}>
                            <div className='buttonContentDiv'>
                                <img className='buttonPostPhoto' src="/icons/comment.png"></img>
                                <p className='buttonPostCounter'>{countComment}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='commentsMainDiv'>
                <div className='postContentDiv'>
                    {props.post.comments.map((comment) => (
                        <CommentUser key={comment.id} myId={props.myId} comment={comment}></CommentUser>
                    ))}
                    {props.myId && (
                        <div id={'writeCommentDiv'}>
                            <img id='writeCommentPhoto' src={`${REACT_APP_SERVER}/${props.myAvatarSrc}`}/>
                            <input id={'commentInput'} placeholder={'Написать комментарий...'} value={newCommentText}
                                   onInput={(e) => setNewCommentText((e.target as HTMLInputElement).value)}/>
                            <img id={'createCommentImg'} src={'/icons/sendIcon.png'} onClick={writeNewComment}/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}