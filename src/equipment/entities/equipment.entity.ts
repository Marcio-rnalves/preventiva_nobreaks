import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Equipment {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  patrimonio: number;

  @Column()
  marca: string;

  @Column()
  modelo: string;

  @Column()
  setor: string;

  @Column()
  local_instalacao: string;

  @Column()
  modelo_bateria: string;

  @Column()
  qtde_bateria: string;
}
