import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { User } from 'src/users/users.model';
import { PostModel } from './posts.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, PostModel]),
    FilesModule,
  ],
})
export class PostsModule {}
