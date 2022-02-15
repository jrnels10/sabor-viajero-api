import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['ownerId'])
export class Stand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  food_stand: string;

  @Column()
  contact_number: string;

  @Column()
  ownerId: number;

  @Column('int', { array: true })
  coordinates: number[];

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  status: boolean;

  @Column('text', { array: true })
  type: string[];
}
