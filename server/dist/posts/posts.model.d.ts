import { Model } from "sequelize-typescript";
import { User } from "../users/users.model";
import { Comment } from '../comments/comments.model';
interface PostsCreationAttrs {
    readonly text: string;
}
export declare class Post extends Model<Post, PostsCreationAttrs> {
    id: number;
    text: string;
    userId: number;
    user: User;
    comments: Comment[];
}
export {};
