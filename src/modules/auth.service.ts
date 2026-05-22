import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}

  async login(email: string, password: string) {
    const adminEmail = this.configService.get<string>('ADMIN_EMAIL');
    const adminPassword = this.configService.get<string>('ADMIN_PASSWORD');

    if (email === adminEmail && password === adminPassword) {
      const payload = { email, role: 'admin' };
      const accessToken = jwt.sign(payload, this.configService.get<string>('JWT_SECRET') || 'secret', {
        expiresIn: '24h',
      });

      return {
        access_token: accessToken,
        user: { email, role: 'admin' },
      };
    }

    throw new Error('Invalid credentials');
  }

  async verifyToken(token: string) {
    try {
      const decoded = jwt.verify(token, this.configService.get<string>('JWT_SECRET') || 'secret');
      return decoded;
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
}
