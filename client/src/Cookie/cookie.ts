export function getCookie(name: string) {
    return localStorage.getItem(name);
}

export function setCookie(name: string, value: string) {
    return localStorage.setItem(name, value);
}

export function exit(){
    localStorage.removeItem('myId')
    localStorage.removeItem('myAvatarSrc')
}

interface saveUserProp{
    myId: string;
    myAvatarSrc: string;
}

export function saveUser(data: saveUserProp){
    setCookie('myId', data.myId)
    setCookie('myAvatarSrc', data.myAvatarSrc)
}