import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SystemService } from './system.service';
import { System } from './domain/system';

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
  @ApiResponse({
    type: System,
  })
  @Get()
  public async getAll() {
    return this.systemService.getAll();
  }
}
