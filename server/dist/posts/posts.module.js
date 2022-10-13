"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsModule = void 0;
const common_1 = require("@nestjs/common");
const posts_service_1 = require("./posts.service");
const posts_controller_1 = require("./posts.controller");
const sequelize_1 = require("@nestjs/sequelize");
const users_model_1 = require("../users/users.model");
const posts_likes_model_1 = require("./posts.likes.model");
const posts_model_1 = require("./posts.model");
let PostsModule = class PostsModule {
};
PostsModule = __decorate([
    (0, common_1.Module)({
        providers: [posts_service_1.PostsService],
        controllers: [posts_controller_1.PostsController],
        imports: [
            sequelize_1.SequelizeModule.forFeature([posts_model_1.Post, users_model_1.User, posts_likes_model_1.PostLike]),
        ]
    })
], PostsModule);
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map