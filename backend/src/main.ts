import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { PORT } from './shared/consts';

const bootstrap = async () => {
  try {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    const config = new DocumentBuilder()
      .setTitle('Docs')
      .setDescription('The car-sharing API')
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const configService = app.get(ConfigService);
    const port = +configService.get<number>(PORT) || 3000;
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api', app, document);
    await app.listen(port);
  } catch (e) {
    console.log(e);
  }
};

bootstrap();
