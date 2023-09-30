import { IsString, IsInt } from 'class-validator';

export class CreateEquipmentDto {
  @IsInt()
  patrimonio: number;

  @IsString()
  marca: string;

  @IsString()
  modelo: string;

  @IsString()
  setor: string;

  @IsString()
  local_instalacao: string;

  @IsString()
  modelo_bateria: string;

  @IsString()
  qtde_bateria: string;
}
