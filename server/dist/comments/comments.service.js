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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const comments_model_1 = require("./comments.model");
const users_model_1 = require("../users/users.model");
const comments_likes_1 = require("./comments.likes");
let CommentsService = class CommentsService {
    constructor(commentRepository, userRepository, commentLikeRepository) {
        this.commentRepository = commentRepository;
        this.userRepository = userRepository;
        this.commentLikeRepository = commentLikeRepository;
    }
    async create(dto) {
        await this.commentRepository.create({ text: dto.text, userId: dto.userId, postId: dto.postId });
    }
    async delete(postId) {
        await this.commentRepository.destroy({ where: { id: postId } });
    }
    async like(dto) {
        const user = await this.userRepository.findOne({ where: { login: dto.login } });
        const commentLike = await this.commentLikeRepository.findOne({ where: { userId: user.id, commentId: dto.commentId } });
        if (!!commentLike) {
            commentLike.destroy();
        }
        else {
            this.commentLikeRepository.create({ userId: user.id, commentId: dto.commentId });
        }
    }
};
CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(comments_model_1.Comment)),
    __param(1, (0, sequelize_1.InjectModel)(users_model_1.User)),
    __param(2, (0, sequelize_1.InjectModel)(comments_likes_1.CommentLike)),
    __metadata("design:paramtypes", [Object, Object, Object])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map