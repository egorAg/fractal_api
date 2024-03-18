import { Consultation } from 'src/consultations/domain/consultation';
import { TopicEntity } from 'src/topics/infrastructure/relational/entities/topic.entity';
import { ConsultationEntity } from '../entities/consultation.entity';

export class ConsultationMapper {
  static toDomain(raw: ConsultationEntity): Consultation {
    const consultation = new Consultation();
    const topics = () => {
      const topics = raw.topic;
      return topics.map((topic) => ({
        name: topic.name,
        description: topic.description,
      }));
    };
    consultation.id = raw.id;
    consultation.bucket = raw.bucket;
    consultation.createdAt = raw.createdAt;
    consultation.description = raw.description;
    consultation.file = raw.file;
    consultation.name = raw.name;
    consultation.price = raw.price;
    consultation.specialist = raw.specialist;
    consultation.topic = topics();
    consultation.updatedAt = raw.updatedAt;
    return consultation;
  }

  static toPersistance(raw: Consultation): ConsultationEntity {
    const consultation = new ConsultationEntity();
    const topics = () => {
      const topics = raw.topic;
      if (!topics) {
        return [];
      }
      return topics.map((topic) => {
        const entity = new TopicEntity();
        entity.name = topic.name;
        entity.description = topic.description;

        return entity;
      });
    };

    consultation.id = raw.id;
    consultation.bucket = raw.bucket;
    consultation.createdAt = raw.createdAt;
    consultation.description = raw.description;
    consultation.file = raw.file;
    consultation.name = raw.name;
    consultation.price = raw.price;
    consultation.specialist = raw.specialist;
    consultation.topic = topics();
    consultation.updatedAt = raw.updatedAt;
    return consultation;
  }
}
