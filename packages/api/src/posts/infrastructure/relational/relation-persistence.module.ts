import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostRepository } from '../post.repository';
import { PostEntity } from './entities/post.entity';
import { PostRelationsRepository } from './repositories/post.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity])],
  providers: [
    {
      provide: PostRepository,
      useClass: PostRelationsRepository,
    },
  ],
  exports: [PostRepository],
})
export class RelationalPostPersistenceModule {}
