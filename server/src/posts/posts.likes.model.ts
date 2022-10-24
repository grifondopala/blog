import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Post} from "./posts.model";
import {User} from "../users/users.model";

@Table({tableName: 'posts-likes', createdAt: false, updatedAt: false})
export class PostLike extends Model<PostLike>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    userId: number
    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Post)
    postId: number
    @BelongsTo(() => Post)
    post: Post;

}