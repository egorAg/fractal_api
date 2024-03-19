import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import authConfig from './auth/config/auth.config';
import { CommentsModule } from './comments/comments.module';
import appConfig from './config/app.config';
import { ConsultationsModule } from './consultations/consultations.module';
import { ContentModule } from './content/content.module';
import databaseConfig from './database/config/database.config';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { PostsModule } from './posts/posts.module';
import { SessionModule } from './session/session.module';
import { SystemModule } from './system/system.module';
import telegramConfig from './telegram/config/telegram.config';
import { TelegramModule } from './telegram/telegram.module';
import { TopicsModule } from './topics/topics.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [databaseConfig, authConfig, appConfig, telegramConfig],
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
      dataSourceFactory: async (options: DataSourceOptions) => {
        return new DataSource(options).initialize();
      },
    }),
    UserModule,
    AuthModule,
    SessionModule,
    TelegramModule,
    TopicsModule,
    ConsultationsModule,
    PostsModule,
    CommentsModule,
    SystemModule,
    ContentModule
  ],
})
export class AppModule {}
