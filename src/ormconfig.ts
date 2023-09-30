import { DataSourceOptions } from 'typeorm';

export const config: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'preventiva_nobreak',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: true,
};
