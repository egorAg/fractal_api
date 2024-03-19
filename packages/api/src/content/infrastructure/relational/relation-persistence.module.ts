import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContentRepository } from '../content.repository';
import { ContentEntity } from './entities/content.entity';
import { ContentRelationalRepository } from './repositories/content.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ContentEntity])],
  providers: [
    {
      provide: ContentRepository,
      useClass: ContentRelationalRepository,
    },
  ],
  exports: [ContentRepository],
})
export class RelationalPostPersistenceModule {}
