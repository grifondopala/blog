import { CreateCommentDto } from "./dto/create.comment.dto";
import { Comment } from "./comments.model";
import { LikeCommentDto } from "./dto/like.comment.dto";
import { User } from "../users/users.model";
import { CommentLike } from "./comments.likes";
export declare class CommentsService {
    private commentRepository;
    private userRepository;
    private commentLikeRepository;
    constructor(commentRepository: typeof Comment, userRepository: typeof User, commentLikeRepository: typeof CommentLike);
    create(dto: CreateCommentDto): Promise<void>;
    delete(postId: number): Promise<void>;
    like(dto: LikeCommentDto): Promise<void>;
}
