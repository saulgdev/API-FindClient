import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import * as cors from 'cors';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  app.use(
    cors({
      origin: 'http://localhost:3001',
      credentials: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
