import { InjectRepository } from '@nestjs/typeorm';
import { Content } from 'src/content/doamin/content';
import { ILike, Repository } from 'typeorm';
import { ContentRepository } from '../../content.repository';
import { ContentEntity } from '../entities/content.entity';
import { ContentMapper } from '../mappers/content.mapper';

export class ContentRelationalRepository implements ContentRepository {
  constructor(
    @InjectRepository(ContentEntity)
    private readonly contentRepo: Repository<ContentEntity>,
  ) {}

  async getByKey(key: string): Promise<Content | null> {
    const record = await this.contentRepo.findOne({
      where: {
        name: key,
      },
    });

    if (record) return ContentMapper.toDomain(record);

    return null;
  }
  async getByName(name: string): Promise<Content | null> {
    const record = await this.contentRepo.findOne({
      where: {
        value: ILike(`%${name}%`),
      },
    });

    if (record) return ContentMapper.toDomain(record);

    return null;
  }

  async getAll(): Promise<Content[]> {
    const records = await this.contentRepo.find();

    return records.map((record) => ContentMapper.toDomain(record));
  }
}
