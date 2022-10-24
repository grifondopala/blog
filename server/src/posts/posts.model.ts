import {BelongsTo, BelongsToMany, Column, DataType, ForeignKey, HasMany, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";
import {Comment} from '../comments/comments.model'
import {PostLike} from "./posts.likes.model";

interface PostsCreationAttrs{
    readonly text: string;
}

@Table({tableName: 'posts', createdAt: true, updatedAt: false})
export class Post extends Model<Post, PostsCreationAttrs>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING})
    text: string;

    @ForeignKey(() => User)
    userId: number
    @BelongsTo(() => User)
    user: User;

    @HasMany( () => Comment)
    comments: Comment[];

    @HasMany(() => PostLike)
    likedUsers: PostLike[];

}