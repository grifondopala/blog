import { Model } from "sequelize-typescript";
export declare class CommentLike extends Model<CommentLike> {
    id: number;
    userId: number;
    commentId: number;
}
