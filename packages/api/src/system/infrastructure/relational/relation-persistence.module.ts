import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SystemRepository } from '../system.repository';
import { SystemEntity } from './entities/system.entity';
import { SystemRelationalRepository } from './repositories/system.repository';

@Module({
  imports: [TypeOrmModule.forFeature([SystemEntity])],
  providers: [
    {
      provide: SystemRepository,
      useClass: SystemRelationalRepository,
    },
  ],
  exports: [SystemRepository],
})
export class RelationalSystemPersistenceModule {}
