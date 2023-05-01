import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    },
  });
  return app;
}

async function run() {
  const nestApp = await bootstrap();
  await nestApp.listen(4000);
}
run();
