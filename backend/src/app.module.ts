import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AutoModule } from './auto/auto.module';
import { RentModule } from './rent/rent.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entity/user-entity';
import { AutoEntity } from './auto/entity/auto-entity';
import { RentEntity } from './rent/entity/rent.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      username: process.env.DB_USERNAME,
      port: +process.env.DB_PORT,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      entities: [UserEntity, AutoEntity, RentEntity],
      database: process.env.DB_NAME,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
    AutoModule,
    RentModule,
  ],
})
export class AppModule {}
