import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import appConfig from './infrastructure/config/app.config';
import databaseConfig from './infrastructure/config/database.config';
import { ApplicationModule } from './application/application.module';
import { InfrastructureModule } from './infrastructure/infrastructure.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: ['.env'],
    }),
    ApplicationModule,
    InfrastructureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
