import { Consultation } from 'src/consultations/domain/consultation';
import { EntityCondition } from 'src/utils/types/entity-condition.type';
import { NullableType } from 'src/utils/types/nullable.type';
import { DeepPartial } from 'typeorm';

export abstract class ConsultationRepository {
  abstract create(
    data: Omit<Consultation, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Consultation>;

  abstract findAll(): Promise<Consultation[]>;

  abstract findOne(
    fields: EntityCondition<Consultation>,
  ): Promise<NullableType<Consultation>>;

  abstract update(
    id: Consultation['id'],
    payload: DeepPartial<Consultation>,
  ): Promise<Consultation | null>;

  abstract softDelete(id: Consultation['id']): Promise<void>;
}
