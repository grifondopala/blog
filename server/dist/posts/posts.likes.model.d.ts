import { Model } from "sequelize-typescript";
export declare class PostLike extends Model<PostLike> {
    id: number;
    userId: number;
    postId: number;
}
