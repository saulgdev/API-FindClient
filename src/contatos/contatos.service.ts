import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';
import { Contato } from './entities/contato.entity';
import { JwtService } from '@nestjs/jwt';
import { response } from 'express';
import { Cliente } from 'src/users/entities/user.entity';

@Injectable()
export class ContatosService {
  constructor(
    @InjectRepository(Contato) private contatoRepository: Repository<Contato>,
    @InjectRepository(Cliente) private clienteRepository,
    private jwtService: JwtService,
  ) {}
  async create(createContatoDto: CreateContatoDto, req) {
    const auth = req.headers.authorization;
    if (!auth) {
      return response.status(401);
    }
    const token = auth.split(' ');
    const payload: any = this.jwtService.decode(token[1]);

    const user = await this.clienteRepository.findOneBy({ id: payload.id });
    const newContact = this.contatoRepository.create({
      ...createContatoDto,
      user,
    });
    return this.contatoRepository.save(newContact);
  }

  findAll(req) {
    const auth = req.headers.authorization;
    if (!auth) {
      return response.status(401);
    }
    const token = auth.split(' ');
    const payload: any = this.jwtService.decode(token[1]);
    return this.contatoRepository.find({ where: { id: payload.id } });
  }

  findOne(id: number, req) {
    const auth = req.headers.authorization;
    if (!auth) {
      return response.status(401);
    }
    return this.contatoRepository.findOneBy({ id });
  }

  update(id: number, updateContatoDto: UpdateContatoDto, req) {
    const auth = req.headers.authorization;
    if (!auth) {
      return response.status(401);
    }
    return this.contatoRepository.update(id, updateContatoDto);
  }

  remove(id: number, req) {
    const auth = req.headers.authorization;
    if (!auth) {
      return response.status(401);
    }
    return this.contatoRepository.delete({ id });
  }
}
