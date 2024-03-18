import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';

@ApiTags('Comments')
@Controller({ path: 'comments', version: '1' })
export class CommentsController {
  constructor(private readonly commentService: CommentsService) {}
  @ApiOperation({
    description: 'Create new comment',
    summary: 'Create new comment',
  })
  @ApiParam({
    name: 'postId',
    description: 'Set the post ID here',
    example: 'some uuid',
  })
  @Post(':postId')
  public async create(
    @Param('postId') id: string,
    @Body() payload: CreateCommentDto,
  ) {
    await this.commentService.create(id, payload);
  }

  @ApiOperation({
    description: 'Get comments attached to post, return oly approved comments',
    summary: 'Get comments',
  })
  @ApiParam({
    name: 'postId',
    description: 'Set the post ID here',
    example: 'some uuid',
  })
  @Get(':postId')
  public async getByPost(@Param('postId') id: string) {
    return this.commentService.getCommentsByPost(id);
  }
}
