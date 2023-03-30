import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  BeforeInsert,
} from 'typeorm';
import { Contato } from 'src/contatos/entities/contato.entity';
import * as bcrypt from 'bcryptjs';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 8);
  }

  @Column()
  phone: string;

  @OneToMany(() => Contato, (contato) => contato.user, { cascade: true })
  contato_id: Contato[];
}
