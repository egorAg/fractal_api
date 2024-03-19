import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PostsService } from 'src/posts/posts.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { CommentRepository } from './infrastructure/comment.repository';

@Injectable()
export class CommentsService {
  constructor(
    private readonly commentRepo: CommentRepository,
    private readonly postService: PostsService,
  ) {}

  public async create(postId: string, payload: CreateCommentDto) {
    const post = await this.postService.getPostById(postId);
    if (!post) {
      throw new HttpException('Post not found', HttpStatus.BAD_REQUEST);
    }
    await this.commentRepo.create({
      name: payload.name,
      message: payload.message,
      post,
    });
  }

  public async getCommentsByPost(postId: string) {
    return this.commentRepo.getAllByPost(postId);
  }
}
