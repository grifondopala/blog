import * as React from "react";
import * as Cookie from '../Cookie/cookie'
import {exit} from "../Cookie/cookie";

interface NavbarProps{
    readonly myId: number | null;
    readonly myAvatarSrc: string | null;
}

export function Navbar(props: NavbarProps){

    return(
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/feed">BeOnLine</a>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/feed">Лента Новостей</a>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                {props.myId ? (
                                <div style={{display: 'flex'}}>
                                    <img id={"commentUserPhoto"} src={`http://localhost:5000${props.myAvatarSrc}`}/>
                                    <a className="nav-link active" aria-current="page" href={`/user/${props.myId}`}>Моя страница</a>
                                    <button className="btn btn-danger" onClick={() => { exit(); window.location.href = '/auth'; }}>Выйти</button>
                                </div>
                                ) : (
                                <div style={{display: 'flex'}}>
                                    <a className="nav-link active" aria-current="page" href={`/auth`}>Войти</a>
                                </div>)}
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    )
}