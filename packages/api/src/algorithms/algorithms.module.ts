import { Module } from '@nestjs/common';
import { AlgorithmsController } from './algorithms.controller';
import { AlgorithmsService } from './algorithms.service';
import { RuneModule } from '../runes/rune.module';

@Module({
  imports: [RuneModule],
  controllers: [AlgorithmsController],
  providers: [AlgorithmsService],
})
export class AlgorithmsModule {}
