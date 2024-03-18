import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { DeepPartial } from 'typeorm';
import { Topic } from '../domain/topic';

export abstract class TopicRepository {
  abstract create(
    data: Omit<Topic, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Topic>;

  abstract findAll(): Promise<Topic[]>;

  abstract findOne(
    fields: EntityCondition<Topic>,
  ): Promise<NullableType<Topic>>;

  abstract update(
    id: Topic['id'],
    payload: DeepPartial<Topic>,
  ): Promise<Topic | null>;

  abstract softDelete(id: Topic['id']): Promise<void>;
}
