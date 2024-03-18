import { Injectable } from '@nestjs/common';
import { TopicRepository } from './infrastructure/topic.repository';

@Injectable()
export class TopicsService {
  constructor(private readonly topicRepo: TopicRepository) {}

  public async getAllTopics() {
    return this.topicRepo.findAll();
  }

  public async getConsultationsByTopicId(topicId: string) {
    const entity = await this.topicRepo.findOne({ id: topicId });

    return entity?.consultations;
  }
}
