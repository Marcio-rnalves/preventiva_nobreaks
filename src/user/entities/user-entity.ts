import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Role } from 'src/enums/role.enum';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  role: Role
}
