import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { AlgorithmsService } from './algorithms.service';
import { Auth } from '../auth/decorators/auth.decorator';

@Auth
@ApiTags('Алгоритмы')
@Controller('algorithms')
export class AlgorithmsController {
  constructor(private readonly service: AlgorithmsService) {}

  @ApiOperation({
    description: 'Calculate results (only runes available)',
    summary: 'Calculate',
  })
  @Get(':date')
  public async calculate(@Param('date') date: string) {
    return this.service.calculate(date);
  }
}
