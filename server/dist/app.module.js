"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("./users/users.model");
const users_module_1 = require("./users/users.module");
const posts_likes_model_1 = require("./posts/posts.likes.model");
const posts_model_1 = require("./posts/posts.model");
const comments_model_1 = require("./comments/comments.model");
const comments_likes_1 = require("./comments/comments.likes");
const comments_module_1 = require("./comments/comments.module");
const posts_module_1 = require("./posts/posts.module");
const sequelize_1 = require("@nestjs/sequelize");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        controllers: [],
        providers: [],
        imports: [
            sequelize_1.SequelizeModule.forRoot({
                dialect: 'mysql',
                host: '127.0.0.1',
                port: 3306,
                username: 'root',
                password: '',
                database: 'blog',
                models: [posts_model_1.Post, comments_model_1.Comment, posts_likes_model_1.PostLike, users_model_1.User, comments_likes_1.CommentLike],
                autoLoadModels: true,
            }),
            posts_module_1.PostsModule,
            users_module_1.UsersModule,
            comments_module_1.CommentsModule
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map