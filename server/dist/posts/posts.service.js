"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const users_model_1 = require("../users/users.model");
const sequelize_1 = require("@nestjs/sequelize");
const posts_model_1 = require("./posts.model");
const posts_likes_model_1 = require("./posts.likes.model");
let PostsService = class PostsService {
    constructor(postRepository, userRepository, postLikeRepository) {
        this.postRepository = postRepository;
        this.userRepository = userRepository;
        this.postLikeRepository = postLikeRepository;
    }
    async create(dto) {
        const user = await this.userRepository.findOne({ where: { login: dto.login } });
        const post = { text: dto.text, userId: user.id };
        await this.postRepository.create(post);
    }
    async like(dto) {
        const user = await this.userRepository.findOne({ where: { login: dto.login } });
        const postLike = await this.postLikeRepository.findOne({ where: { userId: user.id, postId: dto.postId } });
        if (!!postLike) {
            postLike.destroy();
        }
        else {
            this.postLikeRepository.create({ userId: user.id, postId: dto.postId });
        }
    }
    async delete(postId) {
        await this.postRepository.destroy({ where: { id: postId } });
    }
};
PostsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(posts_model_1.Post)),
    __param(1, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __param(2, (0, sequelize_1.InjectModel)(posts_likes_model_1.PostLike)),
    __metadata("design:paramtypes", [Object, Object, Object])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map