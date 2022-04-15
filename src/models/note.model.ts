import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Note extends BaseEntity {
  @PrimaryGeneratedColumn()
  note_id!: number;

  @Column()
  content!: string;

  @CreateDateColumn()
  created_at!: Date;
}
