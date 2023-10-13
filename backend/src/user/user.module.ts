import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entity/user-entity';
import { UserController } from './user.controller';
import { AuthGuard } from '../auth/guards/auth-guard';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  providers: [UserService, ConfigService],
  exports: [UserService],
  controllers: [UserController],
})
export class UserModule {}
