import { DataSourceOptions } from 'typeorm';
import { Usuario } from './user/entities/user-entity';
import { Equipment } from './equipment/entities/equipment.entity';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'teste2',
  entities: [__dirname + '/**/*.entity{.ts,.js}', Usuario, Equipment],
  synchronize: true,
};
