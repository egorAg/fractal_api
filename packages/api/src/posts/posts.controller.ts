import { Body, Controller, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SearchPostsDto } from './dto/search-posts.dto';
import { PostsService } from './posts.service';
import { Post as PostDomain } from './domain/post';

@ApiTags('Posts')
@Controller({ path: 'posts', version: '1' })
export class PostsController {
  constructor(private readonly postService: PostsService) {}

  @ApiOperation({
    summary: 'Get all posts',
    description: 'Get all posts, with filters and pagination',
  })
  @ApiResponse({
    type: [PostDomain],
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
}
