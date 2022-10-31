import {Body, Controller, Post} from '@nestjs/common';
import {CommentsService} from "./comments.service"
import {CreateCommentDto} from "./dto/create.comment.dto";
import {User} from "../users/users.model";
import {LikeCommentDto} from "./dto/like.comment.dto";

@Controller('comments')
export class CommentsController {

    constructor (private commentService: CommentsService) {}

    @Post('/create')
    Create(@Body() dto: CreateCommentDto){
        return this.commentService.create(dto);
    }

    @Post('/delete')
    Delete(@Body() postId){
        return this.commentService.delete(postId);
    }

    @Post('/like')
    Like(@Body() dto: LikeCommentDto){
        return this.commentService.like(dto);
    }

}
