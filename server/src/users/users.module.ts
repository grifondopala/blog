import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import {User} from "./users.model";
import {SequelizeModule} from "@nestjs/sequelize";
import {Friends} from "./friends.model";

@Module({
  providers: [UsersService],
  controllers: [UsersController],
  imports: [
    SequelizeModule.forFeature([User, Friends])
  ]
})
export class UsersModule {}
