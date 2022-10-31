import { Module } from "@nestjs/common";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import { join } from 'path';
import {PostLike} from "./posts/posts.likes.model";
import {Post} from "./posts/posts.model";
import {Comment} from "./comments/comments.model";
import {CommentLike} from "./comments/comments.likes";
import {CommentsModule} from "./comments/comments.module";
import {PostsModule} from "./posts/posts.module";
import {SequelizeModule} from "@nestjs/sequelize";
import {ServeStaticModule} from "@nestjs/serve-static";
import {Friends} from "./users/friends.model";

@Module({
  controllers: [],
  providers: [],
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog',
      models: [Post, Comment, PostLike, User, CommentLike, Friends],
      autoLoadModels: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    PostsModule,
    UsersModule,
    CommentsModule
  ],
})
export class AppModule {}