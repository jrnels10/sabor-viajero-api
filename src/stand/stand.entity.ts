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

  @Column()
  coordinates: number[];

  @Column()
  description: string;

  @Column()
  address: string;

  @Column()
  status: boolean;

  @Column()
  type: string[];
}
