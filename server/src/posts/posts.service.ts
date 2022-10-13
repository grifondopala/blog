import { Injectable } from '@nestjs/common';
import {CreatePostDto} from "./dto/create.post.dto";
import {User} from "../users/users.model";
import {InjectModel} from "@nestjs/sequelize";
import {Post} from "./posts.model";
import {LikePostDto} from "./dto/like.post.dto";
import {PostLike} from "./posts.likes.model";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Post) private postRepository: typeof Post,
                @InjectModel(User) private userRepository: typeof User,
                @InjectModel(PostLike) private postLikeRepository: typeof PostLike) {}

    async create(dto: CreatePostDto): Promise<void>{
        const user = await this.userRepository.findOne({where: {login: dto.login}});
        const post = {text: dto.text, userId: user.id};
        await this.postRepository.create(post);
    }

    async like(dto: LikePostDto): Promise<void>{
        const user = await this.userRepository.findOne({where: {login: dto.login}});
        const postLike = await this.postLikeRepository.findOne({where: {userId: user.id, postId: dto.postId}})
        if(!!postLike) { postLike.destroy() }
        else { this.postLikeRepository.create({userId: user.id, postId: dto.postId})}
    }

    async delete(postId: number): Promise<void>{
        await this.postRepository.destroy({where: {id: postId}})
    }

}
