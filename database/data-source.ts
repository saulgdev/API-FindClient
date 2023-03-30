import { DataSource, DataSourceOptions } from 'typeorm';
import { config } from 'dotenv';
config();

export const dataSourceOptions: DataSourceOptions =
  process.env.NODE_ENV === 'production'
    ? {
        type: 'postgres',
        url: process.env.DATABASE_URL,
        entities: ['dist/src/**/**/*.entity.js'],
        migrations: ['dist/database/migrations/*.js'],
      }
    : {
        type: 'postgres',
        host: process.env.DATABASE_HOST,
        port: parseInt(process.env.DATABASE_PORT),
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: ['dist/src/**/**/*.entity.js'],
        migrations: ['dist/database/migrations/*.js'],
      };

const dataSouce = new DataSource(dataSourceOptions);

export default dataSouce;
