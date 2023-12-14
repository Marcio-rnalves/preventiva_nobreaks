import { Module } from '@nestjs/common';
import { UsuarioController } from './user.controller';
import { UsuarioService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/user-entity';
import { AuthModule } from 'src/auth/auth.module';
import { JwtService } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario]),AuthModule],
  controllers: [UsuarioController],
  providers: [UsuarioService, JwtService],
  exports: [UsuarioService],
})
export class UsuarioModule {}
