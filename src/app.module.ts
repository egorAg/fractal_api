import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import authConfig from './auth/config/auth.config';
import appConfig from './config/app.config';
import { ConsultationsModule } from './consultations/consultations.module';
import databaseConfig from './database/config/database.config';
import { TypeOrmConfigService } from './database/typeorm-config.service';
import { SessionModule } from './session/session.module';
import telegramConfig from './telegram/config/telegram.config';
import { TelegramModule } from './telegram/telegram.module';
import { TopicsModule } from './topics/topics.module';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { CommentsModule } from './comments/comments.module';
import { SystemModule } from './system/system.module';

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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
