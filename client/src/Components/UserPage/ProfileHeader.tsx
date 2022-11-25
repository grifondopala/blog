import * as React from 'react'

import './ProfileHeader.css'

const REACT_APP_SERVER = process.env["REACT_APP_SERVER"];

interface ProfileHeaderProps{
    first_name: string | undefined;
    last_name: string | undefined;
    avatar_src: string | undefined;
}

export function ProfileHeader(props: ProfileHeaderProps){

    return(
        <div id='profileHeaderDiv'>
            <div id='profileHeaderContentDiv'>
                <img id='photoUser' src={`${REACT_APP_SERVER}/${props.avatar_src}`}/>
                <p id='nameUser'>{props.first_name} {props.last_name}</p>
            </div>
        </div>
    )

}