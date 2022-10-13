import { Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
import {Post} from "./posts.model";
import {User} from "../users/users.model";

@Table({tableName: 'posts-likes', createdAt: false, updatedAt: false})
export class PostLike extends Model<PostLike>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER, allowNull: false})
    userId: number;

    @ForeignKey(() => Post)
    @Column({type: DataType.INTEGER, allowNull: false})
    postId: number

}