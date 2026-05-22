import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { FormSubmissionsModule } from './modules/form-submissions.module';
import { AuthModule } from './modules/auth.module';
import { TeamModule } from './modules/team.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => {
        const mongoUri = configService.get<string>('MONGO_URI') || configService.get<string>('MONGODB_URI');
        console.log('🔍 MongoDB URI loaded:', mongoUri?.substring(0, 30) + '...');
        return {
          uri: mongoUri,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    FormSubmissionsModule,
    TeamModule,
  ],
})
export class AppModule {}
