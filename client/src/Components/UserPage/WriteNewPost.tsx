import * as React from 'react'
import './WriteNewPost.css'
import axios from "axios";

interface WriteNewPostProps{
    myLogin: string;

    updatePosts: () => void;
}

export function WriteNewPost(props: WriteNewPostProps){

    const [newPostText, setNewPostText] = React.useState('');

    const textAreaController = (event: any) => {
        let textarea = document.getElementById("textAreaNewPost");
        textarea!.style.height = "";
        textarea!.style.height = textarea!.scrollHeight + "px"
        setNewPostText(event.target.value);
    }

    const makeNewPost = () => {
        const data = {login: props.myLogin, text: newPostText}
        axios({method: 'post', url: `http://localhost:5000/posts/create`, data}).then(res => {
            props.updatePosts();
            setNewPostText('');
        })
    }

    return(
        <div id='writePostMainDiv'>
            <div id='writePostContentDiv'>
                <textarea id='textAreaNewPost' placeholder={'Что у вас нового?'} onInput={(e) => textAreaController(e)}></textarea>
                <div style={{float: "right"}}>
                    <button id='createPostButton' onClick={makeNewPost}>Опубликовать</button>
                </div>
            </div>
        </div>
    )

}