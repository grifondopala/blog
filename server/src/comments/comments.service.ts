import { Injectable } from '@nestjs/common';
import {CreateCommentDto} from "./dto/create.comment.dto";
import {InjectModel} from "@nestjs/sequelize";
import {Comment} from "./comments.model";
import {LikeCommentDto} from "./dto/like.comment.dto";
import {User} from "../users/users.model";
import {CommentLike} from "./comments.likes";

@Injectable()
export class CommentsService {

    constructor(@InjectModel(Comment) private commentRepository: typeof Comment,
                @InjectModel(User) private userRepository: typeof User,
                @InjectModel(CommentLike) private commentLikeRepository: typeof CommentLike,) {}


    async create(dto: CreateCommentDto): Promise<void>{
        await this.commentRepository.create({text: dto.text, userId: dto.userId, postId: dto.postId})
    }

    async delete(postId: number): Promise<void>{
        await this.commentRepository.destroy({where: {id: postId}})
    }

    async like(dto: LikeCommentDto){
        const user = await this.userRepository.findOne({where: {login: dto.login}});
        const commentLike = await this.commentLikeRepository.findOne({where: {userId: user.id, commentId: dto.commentId}})
        if(!!commentLike) { commentLike.destroy() }
        else { this.commentLikeRepository.create({userId: user.id, commentId: dto.commentId})}
    }

}
