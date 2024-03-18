import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import TelegramBot from 'node-telegram-bot-api';
import { AllConfigType } from 'src/config/config.type';

@Injectable()
export class TelegramService {
  private bot: TelegramBot;
  constructor(private readonly configService: ConfigService<AllConfigType>) {
    // this.bot = new TelegramBot(
    //   configService.getOrThrow<string>('telegram.token', {
    //     infer: true,
    //   }),
    //   { polling: true },
    // );
  }

  public sendNewConsultationNotification(
    consultationName: string,
    email: string,
    phone: string,
  ) {
    void this.sendPlain(
      `Заявка на консультацию ${consultationName} для [email: ${email} | phone: ${phone}]`,
    );
  }

  private async sendPlain(message: string) {
    await this.bot.sendMessage(
      this.configService.getOrThrow<string>('telegram.chatId', { infer: true }),
      message,
    );
  }
}
