import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SystemService } from './system.service';

@ApiTags('System')
@Controller({
  path: 'system',
  version: '1',
})
export class SystemController {
  constructor(private readonly systemService: SystemService) {}
  @ApiOperation({
    summary: 'All systems',
    description: 'Get all registered systems',
  })
  @Get()
  public async getAll() {
    return this.systemService.getAll();
  }
}
