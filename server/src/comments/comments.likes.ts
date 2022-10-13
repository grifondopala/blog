import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {Comment} from "./comments.model";
import {User} from "../users/users.model";

@Table({tableName: 'comments-likes', createdAt: false, updatedAt: false})
export class CommentLike extends Model<CommentLike>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @ForeignKey(() => Comment)
    @Column({type: DataType.INTEGER, allowNull: false})
    commentId: number;

}