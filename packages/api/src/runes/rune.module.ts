import { Module } from '@nestjs/common';
import { RuneService } from './rune.service';

@Module({
  providers: [RuneService],
  exports: [RuneService],
})
export class RuneModule {}
