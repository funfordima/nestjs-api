import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';
import { PostModel } from './posts.model';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('posts')
export class PostsController {
  constructor(
    private readonly postService: PostsService,
  ) {}

  @Post()
  @UseInterceptors(FileInterceptor('image'))
  async createPost(
    @Body() dto: CreatePostDto,
    @UploadedFile() image,
  ): Promise<PostModel> {
    return await this.postService.createPost(dto, image);
  }
}
