import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from './ormconfig';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { EquipmentModule } from './equipment/equipment.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './guards/auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot(),
    forwardRef(() => UsuarioModule,), 
    forwardRef(() => AuthModule), 
    TypeOrmModule.forRoot(config),EquipmentModule, JwtModule],
  controllers: [AppController],
  providers: [AppService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
})
export class AppModule {}