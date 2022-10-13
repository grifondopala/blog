import { CommentsService } from "./comments.service";
import { CreateCommentDto } from "./dto/create.comment.dto";
export declare class CommentsController {
    private commentService;
    constructor(commentService: CommentsService);
    Create(dto: CreateCommentDto): Promise<void>;
    Delete(postId: any): Promise<void>;
}
