import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';
import { MyLogger } from './config/logger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  app.enableCors({
    // allowedHeaders: ['content-type'],
    // origin: 'http://localhost:3000',
    // credentials: true,
  });
  const config = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Car-Sharing')
    .setDescription('car-sharing app swagger')
    .setVersion('1.0')
    .build();

  app.useGlobalPipes(new ValidationPipe());
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(+process.env.SERVER_PORT);
}
bootstrap();
