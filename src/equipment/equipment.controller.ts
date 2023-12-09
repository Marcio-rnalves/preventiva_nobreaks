import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put,} from '@nestjs/common';
import { EquipmentService } from './equipment.service';
import { CreateEquipmentDto } from './dto/create-equipment.dto';
import { UpdatePutEquipmentDto } from './dto/update-put-equipment.dto';
import { UpdatePatchEquipmentDto } from './dto/update-patch-equipment.dto';

@Controller('equipment')
export class EquipmentController {
  constructor(private readonly equipmentService: EquipmentService) {}

  @Post()
  create(@Body() createEquipmentDto: CreateEquipmentDto) {
    return this.equipmentService.create(createEquipmentDto);
  }

  @Get()
  findAll() {
    return this.equipmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.equipmentService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Body() updatePutEquipmentDto: UpdatePutEquipmentDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.equipmentService.update(id, updatePutEquipmentDto);
  }

  @Patch(':id')
  async updateParcial(
    @Body() updatePatchEquipmentDto: UpdatePatchEquipmentDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    return this.equipmentService.updateParcial(id, updatePatchEquipmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.equipmentService.remove(+id);
  }
}
