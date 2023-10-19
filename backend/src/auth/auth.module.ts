import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module';
import { GoogleStrategy } from './strategies/google.strategy';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      global: true,
      secret: 'MY_SECRET',
      signOptions: { expiresIn: '121211212s' },
    }),
  ],
  providers: [AuthService, ConfigService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
