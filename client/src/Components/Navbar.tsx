import * as React from "react";

export function Navbar(){

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
                                <a className="nav-link active" aria-current="page" href="/feed">Моя страница</a>
                            </li>
                        </ul>
                    </span>
                </div>
            </div>
        </nav>
    )
}