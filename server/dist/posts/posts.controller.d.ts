import { PostsService } from "./posts.service";
import { CreatePostDto } from "./dto/create.post.dto";
import { LikePostDto } from "./dto/like.post.dto";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    Create(dto: CreatePostDto): Promise<void>;
    Like(dto: LikePostDto): Promise<void>;
    Delete(postId: any): Promise<void>;
}
