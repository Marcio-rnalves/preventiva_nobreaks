import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EquipmentModule } from './equipment/equipment.module';
import { config } from './ormconfig';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './user/user.module';
@Module({
  imports: [EquipmentModule, UsuarioModule, TypeOrmModule.forRoot(config)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
