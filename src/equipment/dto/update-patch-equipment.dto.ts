import { CreateEquipmentDto } from './create-equipment.dto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdatePatchEquipmentDto extends PartialType(CreateEquipmentDto) {}
