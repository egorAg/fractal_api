import { Module } from '@nestjs/common';
import { PostsModule } from 'src/posts/posts.module';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { RelationalCommentPersistenceModule } from './infrastructure/relational/relation-persistence.module';

@Module({
  imports: [RelationalCommentPersistenceModule, PostsModule],
  providers: [CommentsService],
  controllers: [CommentsController],
  exports: [RelationalCommentPersistenceModule],
})
export class CommentsModule {}
