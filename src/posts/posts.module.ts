import { Module } from '@nestjs/common';
import { SystemModule } from 'src/system/system.module';
import { TopicsModule } from 'src/topics/topics.module';
import { RelationalPostPersistenceModule } from './infrastructure/relational/relation-persistence.module';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  imports: [
    SystemModule,
    TopicsModule,
    SystemModule,
    RelationalPostPersistenceModule,
  ],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
