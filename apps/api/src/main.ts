import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: [
      'http://localhost:3000', // frontend origin
      '192.168.0.32:3000'
    ], // frontend origin
    credentials: true,
  });

  await app.listen(8080);
}
bootstrap();
