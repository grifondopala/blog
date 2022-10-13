import { Model } from "sequelize-typescript";
import { Post } from '../posts/posts.model';
import { User } from "../users/users.model";
interface CommentsCreationAttrs {
    readonly text: string;
    readonly postId: number;
    readonly userId: number;
}
export declare class Comment extends Model<Comment, CommentsCreationAttrs> {
    id: number;
    text: string;
    userId: number;
    user: User;
    postId: number;
    post: Post;
}
export {};
