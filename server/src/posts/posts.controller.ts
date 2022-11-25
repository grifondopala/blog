import { Body, Controller, Get, Next, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { CreatePostDto } from './dto/create.post.dto';
import { LikePostDto } from './dto/like.post.dto';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Post('/create')
  Create(@Body() dto: CreatePostDto) {
    return this.postsService.create(dto);
  }

  @Post('/like')
  Like(@Body() dto: LikePostDto) {
    return this.postsService.like(dto);
  }

  @Post('/delete')
  Delete(@Body('postId') postId: number) {
    return this.postsService.delete(postId);
  }

  @Get('/get')
  GetAll() {
    return this.postsService.getAll();
  }
}
