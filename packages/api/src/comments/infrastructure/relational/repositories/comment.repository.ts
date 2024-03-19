import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Comment } from 'src/comments/domain/comment';
import { Repository } from 'typeorm';
import { CommentRepository } from '../../comment.repository';
import { CommentEntity } from '../entities/comment.entity';
import { CommentMapper } from '../mappers/comment.mapper';

@Injectable()
export class CommentRelationalRepository implements CommentRepository {
  constructor(
    @InjectRepository(CommentEntity)
    private readonly commentRepo: Repository<CommentEntity>,
  ) {}
  async create(comment: Comment): Promise<void> {
    const raw = CommentMapper.toPersistance(comment);

    await this.commentRepo.save(raw);
  }
  async getById(id: string): Promise<Comment | null> {
    const raw = await this.commentRepo.findOne({
      where: {
        id: id,
      },
    });

    if (!raw) {
      return null;
    }

    return CommentMapper.toDomain(raw);
  }
  async getAllByPost(postId: string): Promise<Comment[]> {
    const raw = await this.commentRepo.find({
      where: {
        post: {
          id: postId,
        },
        // approved: true,
      },
    });

    return raw.map((comment) => CommentMapper.toDomain(comment));
  }
}
