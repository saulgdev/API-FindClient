import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Request,
} from '@nestjs/common';

import { ContatosService } from './contatos.service';
import { CreateContatoDto } from './dto/create-contato.dto';
import { UpdateContatoDto } from './dto/update-contato.dto';

@Controller('contatos')
export class ContatosController {
  constructor(private readonly contatosService: ContatosService) {}

  @Post()
  create(@Body() createContatoDto: CreateContatoDto, @Request() req) {
    return this.contatosService.create(createContatoDto, req);
  }

  @Get()
  findAll(@Request() req) {
    return this.contatosService.findAll(req);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Request() req) {
    return this.contatosService.findOne(+id, req);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateContatoDto: UpdateContatoDto,
    @Request() req,
  ) {
    return this.contatosService.update(+id, updateContatoDto, req);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.contatosService.remove(+id, req);
  }
}
