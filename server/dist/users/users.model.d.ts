import { Model } from "sequelize-typescript";
import { Post } from "../posts/posts.model";
import { Comment } from '../comments/comments.model';
interface UsersCreationAttrs {
    readonly login: string;
    readonly password: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly avatar_src: string;
}
export declare class User extends Model<User, UsersCreationAttrs> {
    id: number;
    login: string;
    password: string;
    first_name: string;
    last_name: string;
    avatar_src: string;
    posts: Post[];
    comments: Comment[];
}
export {};
