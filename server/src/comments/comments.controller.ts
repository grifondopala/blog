import {Body, Controller, Post} from '@nestjs/common';
import {CommentsService} from "./comments.service"
import {CreateCommentDto} from "./dto/create.comment.dto";
import {User} from "../users/users.model";

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
}
