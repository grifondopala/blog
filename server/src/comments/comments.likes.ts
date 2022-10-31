import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {Comment} from "./comments.model";
import {User} from "../users/users.model";

@Table({tableName: 'comments-likes', createdAt: false, updatedAt: false})
export class CommentLike extends Model<CommentLike>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    userId: number
    @BelongsTo(() => User)
    user: User;

    @ForeignKey(() => Comment)
    commentId: number
    @BelongsTo(() => Comment)
    comment: Comment;


}