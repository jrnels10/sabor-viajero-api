import {
  BaseEntity,
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['food_stand'])
export class Stand extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  food_stand: string;

  @Column({ nullable: true })
  contact_number: string;

  @Column()
  ownerId: number;

  @Column()
  coordinates: number[];

  @Column()
  description: string;

  @Column({ nullable: true })
  address: string;

  @Column({ nullable: true })
  status: boolean;

  @Column({ nullable: true })
  type: string[];
}
