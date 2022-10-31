import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {User} from "../users/users.model";

@Table({tableName: 'friends', createdAt: false, updatedAt: false})
export class Friends extends Model<Friends>{

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.INTEGER})
    userSecondId: number;

    @Column({type: DataType.INTEGER})
    userFirstId: number;

}