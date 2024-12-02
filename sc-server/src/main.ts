import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import rateLimit from 'express-rate-limit';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { Logger, ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import { AppModule } from './app.module';
import { AppConfig } from './infrastructure/config/app.config';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Accept, Authorization',
    credentials: false,
  });

  app.use(
    rateLimit({
      windowMs: 1000,
      max: 200,
    })
  );

  const configService = app.get<ConfigService>(ConfigService);
  const appConfig = configService.get<AppConfig>('app-config');

  app.setGlobalPrefix(appConfig.apiPrefix);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      whitelist: true,
    })
  );

  const swaggerConfig = new DocumentBuilder()
    .setTitle(appConfig.name)
    .setDescription(
      'The server-side application allows users to send requests for emergency support'
    )
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, swaggerConfig, {
    deepScanRoutes: true,
  });
  SwaggerModule.setup('api/v1/docs', app, document, {
    swaggerOptions: {
      persistAuthorization: true,
    },
  });

  await app.listen(appConfig.port);
  logger.log(`${appConfig.name} application listening port: ${appConfig.port}`);
  logger.log(
    `${appConfig.name} application API Document: http://localhost:${appConfig.port}/api/v1/docs`
  );
}
bootstrap();
