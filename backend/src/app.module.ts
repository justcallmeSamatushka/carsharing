import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { UserEntity } from './user/entity/user-entity';
import { AutoModule } from './auto/auto.module';
import * as process from 'process';
import { AutoEntity } from './auto/entity/auto-entity';

@Module({
  imports: [
    ConfigModule.forRoot({}),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.DB_USERNAME,
      port: +process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      entities: [UserEntity, AutoEntity],
      database: process.env.DB_NAME,
    }),
    UserModule,
    AuthModule,
    AutoModule,
  ],
})
export class AppModule {}
