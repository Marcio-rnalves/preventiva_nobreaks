import { Injectable } from '@nestjs/common';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdatePutEquipmentDto } from './dto/update-put-equipment.dto';
import { Equipment } from './entities/equipment.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdatePatchEquipmentDto } from './dto/update-patch-equipment.dto';
import { RoleGuard } from 'src/guards/role.guard';
import { Role } from 'src/enums/role.enum';
import { Roles } from 'src/decorators/roles.decorator';

@Injectable()
export class EquipmentService {
  constructor(
    @InjectRepository(Equipment)
    private equipmentRepository: Repository<Equipment>,
  ) {}

  create(createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentRepository.save(createEquipmentDto);
  }

  update(id: number, updatePutEquipmentDto: UpdatePutEquipmentDto) {
    return this.equipmentRepository.update(id, updatePutEquipmentDto);
  }

  updateParcial(id: number, updatePatchEquipmentDto: UpdatePatchEquipmentDto) {
    return this.equipmentRepository.update(id, updatePatchEquipmentDto);
  }

  findAll() {
    return this.equipmentRepository.find();
  }

  findOne(id: number) {
    return this.equipmentRepository.findOneBy({ id: id });
  }
  @Roles(Role.User)
  remove(id: number) {
     this.equipmentRepository.delete(id);
     return "Equipamento deletado com sucesso!"
  }
}
