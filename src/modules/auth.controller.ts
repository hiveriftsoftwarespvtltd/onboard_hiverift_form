import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    try {
      return await this.authService.login(body.email, body.password);
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  @Post('verify')
  async verifyToken(@Body() body: { token: string }) {
    try {
      const decoded = this.authService.verifyToken(body.token);
      return { valid: true, user: decoded };
    } catch (error) {
      return { valid: false };
    }
  }
}
