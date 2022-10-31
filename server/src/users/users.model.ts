import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {Post} from "../posts/posts.model";
import {Comment} from '../comments/comments.model'
import {PostLike} from "../posts/posts.likes.model";

interface UsersCreationAttrs{
    readonly login: string;
    readonly password: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly avatar_src: string;
}

@Table({tableName: 'users', createdAt: false, updatedAt: false})
export class User extends Model<User, UsersCreationAttrs>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, unique: true})
    login: string;

    @Column({type: DataType.STRING})
    password: string;

    @Column({type: DataType.STRING})
    first_name: string;

    @Column({type: DataType.STRING})
    last_name: string;

    @Column({type: DataType.STRING})
    avatar_src: string;

    @HasMany( () => Post)
    posts: Post[];

    @HasMany(() => Comment)
    comments: Comment[];

}