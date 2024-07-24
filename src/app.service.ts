import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getAccessToken(
    code: string,
    expires_in: number,
  ): { message: string; code: string; expires_in: number } {
    return {
      message: `Access token for code ${code} and expires ${expires_in}`,
      code,
      expires_in,
    };
  }
}
