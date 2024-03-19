import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TopicRepository } from '../topic.repository';
import { TopicEntity } from './entities/topic.entity';
import { TopicRelationalRepository } from './repositories/topic.repository';

@Module({
  imports: [TypeOrmModule.forFeature([TopicEntity])],
  providers: [
    {
      provide: TopicRepository,
      useClass: TopicRelationalRepository,
    },
  ],
  exports: [TopicRepository],
})
export class RelationalTopicPersistenceModule {}
