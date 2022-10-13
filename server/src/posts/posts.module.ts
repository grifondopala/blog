import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {PostLike} from "./posts.likes.model";
import {Post} from "./posts.model";

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([Post, User, PostLike]),
  ]
})
export class PostsModule {}
