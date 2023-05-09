import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import serverlessExpress from '@vendia/serverless-express';
import { Callback, Context, Handler } from 'aws-lambda';

export async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: true, //여기에 url을 넣어도된다.
    credentials: true,
  });
  return app;
}
let server: Handler;

export async function handler(
  event: any,
  context: Context,
  callback: Callback,
) {
  const app = await bootstrap();
  await app.init();
  const expressApp = app.getHttpAdapter().getInstance();

  server = server ?? serverlessExpress({ app: expressApp });
  return server(event, context, callback);
}

async function run() {
  const nestApp = await bootstrap();
  await nestApp.listen(4000);
}
run();
