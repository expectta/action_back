import { Controller, Get, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express'; // express의 Request 타입을 임포트
import { RealIP } from 'nestjs-real-ip';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@RealIP() ip: string): string {
    return ip;
    // return this.appService.getHello();
  }
}
