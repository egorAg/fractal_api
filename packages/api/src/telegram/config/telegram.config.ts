import { registerAs } from '@nestjs/config';
import { IsNotEmpty, IsString } from 'class-validator';
import validateConfig from 'src/utils/validate-config';
import { TelegramConfig } from './telegram-config.type';

export class EnvironmentVariablesValidator {
  @IsNotEmpty()
  @IsString()
  TG_TOKEN: string;

  @IsNotEmpty()
  @IsString()
  TG_CHAT_ID: string;
}

export default registerAs<TelegramConfig>('telegram', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    token: <string>process.env.TG_TOKEN,
    chatId: <string>process.env.TG_CHAT_ID,
  };
});
