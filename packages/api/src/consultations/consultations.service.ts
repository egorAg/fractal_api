import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { TelegramService } from 'src/telegram/telegram.service';
import { TopicsService } from 'src/topics/topics.service';
import { UserSession } from 'src/user/domain/user.session';
import { ConsultationRepository } from './infrastructure/consultation.repository';

@Injectable()
export class ConsultationsService {
  constructor(
    private readonly repository: ConsultationRepository,
    private readonly topicService: TopicsService,
    private readonly telegramService: TelegramService,
  ) {}

  public async getByTopicId(topicId: string) {
    return this.topicService.getConsultationsByTopicId(topicId);
  }

  public async getAll() {
    return this.repository.findAll();
  }

  public async register(user: UserSession, id: string, phone: string) {
    const consultation = await this.repository.findOne({
      id: id,
    });

    if (!consultation) {
      throw new HttpException('Invalid consultationId', HttpStatus.BAD_REQUEST);
    }

    this.telegramService.sendNewConsultationNotification(
      consultation.name,
      // user.email,
      'asd',
      phone,
    );
  }
}
