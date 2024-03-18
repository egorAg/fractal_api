import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/posts/domain/post';
import { SystemEntity } from 'src/system/infrastructure/relational/entities/system.entity';
import { TopicEntity } from 'src/topics/infrastructure/relational/entities/topic.entity';
import { Repository } from 'typeorm';
import { PostRepository } from '../../post.repository';
import { PostEntity } from '../entities/post.entity';
import { PostMapper } from '../mappers/post.mapper';

export class PostRelationsRepository implements PostRepository {
  constructor(
    @InjectRepository(PostEntity)
    private readonly postRepo: Repository<PostEntity>,
  ) {}

  async getById(id: string): Promise<Post | null> {
    const data = await this.postRepo.findOne({
      where: {
        id: id,
      },
    });

    if (!data) {
      return null;
    }
    return PostMapper.toDomain(data);
  }

  async searchPosts(
    page: number,
    pageSize: number,
    systemId?: string,
    topicId?: string,
    name?: string,
  ) {
    const query = this.postRepo.createQueryBuilder('post');

    // Добавляем связанные сущности в результат запроса
    query.leftJoinAndSelect('post.systems', 'system');
    query.leftJoinAndSelect('post.topics', 'topic');

    // Добавляем фильтры
    if (systemId) {
      query
        .innerJoin('post.system', 'system')
        .andWhere('system.id = :systemId', { systemId });
    }
    if (topicId) {
      query
        .innerJoin('post.topics', 'topic')
        .andWhere('topic.id = :topicId', { topicId });
    }
    if (name) {
      query.andWhere('post.name ILIKE :name', { name: `%${name}%` });
    }

    // Добавляем пагинацию
    const totalItems = await query.getCount();
    console.log(totalItems);
    console.log(pageSize);

    const totalPages = Math.ceil(totalItems / pageSize);

    console.log(totalPages);

    const offset = (page - 1) * pageSize;
    console.log(offset);

    query.offset(offset).limit(pageSize);

    const posts = await query.getMany();

    return {
      posts: posts.map((item) => PostMapper.toDomain(item)),
      totalItems,
      totalPages,
    };
  }

  public async create(topics: TopicEntity[], systems: SystemEntity[]) {
    const post = new PostEntity();
    post.author = 'qwe';
    post.bucket = 'qwe';
    post.content = 'qwe';
    post.description = 'qwe';
    post.file = 'qwe';
    post.name = 'qwe';
    post.slug = 'qwe';
    post.systems = systems;
    post.topics = topics;
    post.system = '';

    console.log(post);

    await this.postRepo.save(post);
  }
}
