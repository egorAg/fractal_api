import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './domain/comment';

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
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
  })
  @Post(':postId')
  @HttpCode(HttpStatus.NO_CONTENT)
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
  @ApiResponse({
    type: [Comment],
  })
  @Get(':postId')
  public async getByPost(@Param('postId') id: string) {
    return this.commentService.getCommentsByPost(id);
  }
}
