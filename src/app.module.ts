import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ContatosModule } from './contatos/contatos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'database/data-source';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    ContatosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
