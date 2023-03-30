import { Module } from '@nestjs/common';
import { ContatosService } from './contatos.service';
import { ContatosController } from './contatos.controller';
import { Contato } from './entities/contato.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Cliente } from 'src/users/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([Contato, Cliente]), JwtModule],
  controllers: [ContatosController],
  providers: [ContatosService],
})
export class ContatosModule {}
