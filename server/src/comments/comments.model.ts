import {BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";

import {Post} from '../posts/posts.model'
import {User} from "../users/users.model";
import {CommentLike} from "./comments.likes";

interface CommentsCreationAttrs{
    readonly text: string;
    readonly postId: number;
    readonly userId: number;
}

@Table({tableName: 'comments', createdAt: true, updatedAt: false})
export class Comment extends Model<Comment, CommentsCreationAttrs>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    text: string;

    @ForeignKey(() => User)
    userId: number
    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Post)
    postId: number
    @BelongsTo(() => Post)
    post: Post;

    @HasMany(() => CommentLike)
    likedUsers: CommentLike[];

}