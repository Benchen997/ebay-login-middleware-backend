import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/auth/success')
  handleAuthSuccess(
    @Body() body: { code: string; expires_in: number },
  ): any {
    const { code, expires_in } = body;
    if (!code || !expires_in) {
      return {
        message: 'Request body is missing code or expires_in field',
      };
    }
    console.log('Received code:', code);
    return this.appService.getAccessToken(code, expires_in);
  }
}
