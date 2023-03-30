import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Cliente } from './entities/user.entity';
import { loginBody } from './interface/login';
import { JwtService } from '@nestjs/jwt';
import { config } from 'dotenv';

config();

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Cliente) private userRepository,
    private jwtService: JwtService,
  ) {}
  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findBy({ id });
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, { ...updateUserDto });
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }

  async login(loginBody: loginBody) {
    const user: Cliente = await this.userRepository.findOneBy({
      email: loginBody.email,
    });
    return {
      token: this.jwtService.sign(
        { id: user.id, email: user.email },
        {
          secret: process.env.JWT_SECRET_KEY,
          expiresIn: 24,
        },
      ),
    };
  }
}
