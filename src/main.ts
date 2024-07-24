import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS using the cors package
  app.use(
    cors({
      origin: [
        'http://localhost:8800',
        'https://ebay-login-middleware.vercel.app',
      ], // Change this to your frontend origin
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      credentials: true,
    }),
  );

  await app.listen(3000);
}
bootstrap();
