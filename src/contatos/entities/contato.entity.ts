import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Cliente } from 'src/users/entities/user.entity';

@Entity()
export class Contato {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.contato_id)
  @JoinColumn({ name: 'user' })
  user: Cliente;
}
