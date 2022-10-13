import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "../users/users.model";
import {CommentLike} from "./comments.likes";
import {Comment} from "./comments.model";

@Module({
  providers: [CommentsService],
  controllers: [CommentsController],
  imports: [
    SequelizeModule.forFeature([Comment, User, CommentLike]),
  ]
})
export class CommentsModule {}
