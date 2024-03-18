import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchPostsDto } from './dto/search-posts.dto';
import { PostsService } from './posts.service';

@ApiTags('Posts')
@Controller({ path: 'posts', version: '1' })
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @ApiOperation({
    summary: 'Get all posts',
    description: 'Get all posts, with filters and pagination',
  })
  @Post('search')
  async searchPosts(@Body() searchPostsDto: SearchPostsDto) {
    console.log(searchPostsDto);

    return this.postService.getPosts(
      searchPostsDto.page,
      searchPostsDto.pageSize,
      searchPostsDto.systemId,
      searchPostsDto.topicId,
      searchPostsDto.name,
    );
  }

  @Get('create')
  public async create() {
    await this.postService.create();
  }
}
