import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { PostModel } from './posts.model';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel) private postRepository: typeof PostModel,
    private readonly filesService: FilesService,
  ) {}

  async createPost(dto: CreatePostDto, image: any): Promise<PostModel> {
    const filename = await this.filesService.createFile(image);

    const post = this.postRepository.create({ ...dto, image: filename });

    return post;
  }
}
