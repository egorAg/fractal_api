import { Controller, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { ContentService } from './content.service';

@ApiTags('Content')
@Controller({ path: 'content', version: '1' })
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @ApiOperation({
    summary: 'Keys',
    description: 'Get all keys',
  })
  @Get('/key')
  public async getAllKeys() {
    return this.contentService.getAllKeys();
  }
  @ApiOperation({
    summary: 'Values',
    description: 'Get all RuneConditions',
  })
  @Get('/value')
  public async getAllValues() {
    return this.contentService.getAllValues();
  }

  @ApiOperation({
    summary: 'By key',
    description: 'Get value by key',
  })
  @Get('/key/:key')
  public async getByKey(@Param(':key') key: string) {
    return this.contentService.getByKey(key);
  }

  @ApiOperation({
    summary: 'By pattern',
    description:
      'Get value by pattern, for example: "social." return all keys started with social.',
  })
  @Get('/value/:pattern')
  public async getByPattern(@Param('pattern') pattern: string) {
    return this.contentService.getByPattern(pattern);
  }
}
