import * as React from 'react'
import {Post} from "../../Models/models";
import axios from 'axios';
import './PostUser.css'

interface PostUserProp{
    post: Post;
    first_name: string;
    last_name: string;
    myLogin: string;
    loginUser: string;

    updatePosts: () => void;
}

export function PostUser(props: PostUserProp){

    const day = props.post.createdAt.split('T')[0].split('-');
    const time = props.post.createdAt.split('T')[1].split(':');

    const [liked, setLiked] = React.useState(props.post.likedUsers.some((e) => e.user.login === props.myLogin))
    const [countLike, setCountLike] = React.useState(props.post.likedUsers.length)

    const like = () => {
        if(liked) { setCountLike(countLike - 1); }
        else { setCountLike(countLike + 1); }
        setLiked(!liked);
        axios({method: 'post',
                     url: 'http://localhost:5000/posts/like',
                     data: {login: props.myLogin, postId: props.post.id}}).then(res => {})
    }

    const deletePost = () => {
        axios({method: 'post',
                     url: 'http://localhost:5000/posts/delete',
                     data: {postId: props.post.id}}).then(res => {
            props.updatePosts();
        })
    }

    return(
        <div className='postMainDiv'>
            <div className='postContentDiv'>
                <div className='topPostDiv'>
                    <p className='nameUserPost'>{props.first_name} {props.last_name}</p>
                    {props.loginUser === props.myLogin && (
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
                            <p className='buttonPostCounter'>0</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}