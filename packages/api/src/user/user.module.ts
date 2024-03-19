import { Module } from '@nestjs/common';
import { RelationalUserPersistenceModule } from './infrastructure/relational/relation-persistence.module';
import { UsersService } from './user.service';

@Module({
  imports: [RelationalUserPersistenceModule],
  providers: [UsersService],
  exports: [UsersService, RelationalUserPersistenceModule],
})
export class UserModule {}
