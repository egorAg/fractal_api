import { InjectRepository } from '@nestjs/typeorm';
import { Topic } from 'src/topics/domain/topic';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { FindOptionsWhere, Repository } from 'typeorm';
import { TopicRepository } from '../../topic.repository';
import { TopicEntity } from '../entities/topic.entity';
import { TopicMapper } from '../mappers/topic.mapper';

export class TopicRelationalRepository implements TopicRepository {
  constructor(
    @InjectRepository(TopicEntity)
    private readonly topicRepo: Repository<TopicEntity>,
  ) {}

  async create(
    data: Omit<Topic, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Topic> {
    return TopicMapper.toDomain(
      await this.topicRepo.save(
        this.topicRepo.create(TopicMapper.toPersistance(data)),
      ),
    );
  }

  async findAll(): Promise<Topic[]> {
    const records = await this.topicRepo.find();
    return records.map((record) => TopicMapper.toDomain(record));
  }

  async findOne(fields: EntityCondition<Topic>): Promise<NullableType<Topic>> {
    const entity = await this.topicRepo.findOne({
      where: fields as FindOptionsWhere<TopicEntity>,
      relations: {
        consultations: true,
      },
    });

    return entity ? TopicMapper.toDomain(entity) : null;
  }

  async update(id: string, payload: Partial<Topic>): Promise<Topic | null> {
    const entity = await this.topicRepo.findOne({
      where: { id: String(id) },
    });

    if (!entity) {
      throw new Error('User not found');
    }

    const updatedEntity = await this.topicRepo.save(
      this.topicRepo.create(
        TopicMapper.toPersistance({
          ...TopicMapper.toDomain(entity),
          ...payload,
        }),
      ),
    );

    return TopicMapper.toDomain(updatedEntity);
  }

  async softDelete(id: string): Promise<void> {
    await this.topicRepo.softDelete({ id: id });
  }
}
