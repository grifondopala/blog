import * as React from "react"

import './AuthPage.css'
import axios from "axios";
import * as Cookie from '../../Cookie/cookie'
import {saveUser} from "../../Cookie/cookie";


const REACT_APP_SERVER = process.env["REACT_APP_SERVER"];

const reducerAuth = (state: any, action: any) => {
    let text = (action.e.target as HTMLInputElement).value;
    switch (action.type){
        case 'login':
            return {...state, login: text}
        case 'password':
            return {...state, password: text}
        case 'first_name':
            return {...state, first_name: text}
        case 'last_name':
            return {...state, last_name: text}
        default:
            return state
    }
}

export function AuthPage(){

    const [isLogging, setIsLogging] = React.useState(true);

    const [signInData, dispatchSignInData] = React.useReducer(reducerAuth, {login: '', password: ''})
    const [signUpData, dispatchSignUpData] = React.useReducer(reducerAuth, {login: '', password: '', first_name: '', last_name: ''})

    const signIn = () => {
        axios({method: 'post', url: `${REACT_APP_SERVER}/users/auth`, data: signInData}).then((res) => {
            if(res.data.status){
                saveUser({myId: res.data.myId, myAvatarSrc: res.data.myAvatarSrc});
                window.location.href = `http://127.0.0.1:3000/user/${res.data.myId}`;
            }
        })
    }

    const signUp = () => {
        axios({method: 'post', url: `${REACT_APP_SERVER}/users/create`, data: signUp}).then((res) => {
            if(res.data.status){
                window.location.href = `http://127.0.0.1:3000/user/${res.data.myId}`;
            }
        })
    }

    return(
        <div id={'mainAuthDiv'}>
            <div id={'contentAuthDiv'}>
                {isLogging ? (
                    <div id={'signInDiv'}>
                        <h3 className={'authTitle'}>Войти</h3>
                        <div className={'inputDivAuth'}>
                            <label>Логин</label>
                            <input placeholder={'Логин'} value={signInData.login} onInput={(e) => dispatchSignInData({type: 'login', e: e})}/>
                        </div>
                        <div className={'inputDivAuth'}>
                            <label>Пароль</label>
                            <input placeholder={'Пароль'} value={signInData.password} onInput={(e) => dispatchSignInData({type: 'password', e: e})}/>
                        </div>
                        <div id={'footerButtonsAuth'}>
                            <button className={'btn btn-success'} onClick={signIn}>Авторизоваться</button>
                            <p id={'changeStageAuthP'} onClick={() => setIsLogging(false)}>Нет аккаунта? Зарегистрируйтесь!</p>
                        </div>
                    </div>
                ) : (
                    <div id={'signInDiv'}>
                        <h3 className={'authTitle'}>Новый аккаунт</h3>
                        <div className={'inputDivAuth'}>
                            <label>Логин</label>
                            <input placeholder={'Логин'} value={signUpData.login} onInput={(e) => dispatchSignUpData({type: 'login', e: e})}/>
                        </div>
                        <div className={'inputDivAuth'}>
                            <label>Пароль</label>
                            <input placeholder={'Пароль'} value={signUpData.password} onInput={(e) => dispatchSignUpData({type: 'password', e: e})}/>
                        </div>
                        <div className={'inputDivAuth'}>
                            <label>Имя</label>
                            <input placeholder={'Имя'} value={signUpData.first_name} onInput={(e) => dispatchSignUpData({type: 'first_name', e: e})}/>
                        </div>
                        <div className={'inputDivAuth'}>
                            <label>Фамилия</label>
                            <input placeholder={'Фамилия'} value={signUpData.last_name} onInput={(e) => dispatchSignUpData({type: 'last_name', e: e})}/>
                        </div>
                        <div id={'footerButtonsAuth'}>
                            <button className={'btn btn-success'} onClick={signUp}>Зарегистрироваться</button>
                            <p id={'changeStageAuthP'} onClick={() => setIsLogging(true)}>Есть уже аккаунт? Войдите!</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}