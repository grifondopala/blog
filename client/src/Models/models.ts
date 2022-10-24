export interface User{
    readonly login: string;
    readonly password: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly avatar_src: string;
    readonly posts: Post[];
}

export interface Post{
    readonly id: number;
    readonly text: string;
    readonly createdAt: string;
    readonly userId: number;
    readonly likedUsers: likeUser[];
}

interface likeUser{
    readonly id: number;
    readonly user: userLogin;
}

interface userLogin{
    readonly login: string;
}