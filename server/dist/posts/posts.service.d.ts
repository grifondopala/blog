import { CreatePostDto } from "./dto/create.post.dto";
import { User } from "../users/users.model";
import { Post } from "./posts.model";
import { LikePostDto } from "./dto/like.post.dto";
import { PostLike } from "./posts.likes.model";
export declare class PostsService {
    private postRepository;
    private userRepository;
    private postLikeRepository;
    constructor(postRepository: typeof Post, userRepository: typeof User, postLikeRepository: typeof PostLike);
    create(dto: CreatePostDto): Promise<void>;
    like(dto: LikePostDto): Promise<void>;
    delete(postId: number): Promise<void>;
}
