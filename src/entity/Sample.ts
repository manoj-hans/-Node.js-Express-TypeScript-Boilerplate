import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Sample {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: "varchar", length: 255 })
  name!: string;

  @Column({ type: "text" })
  description!: string;

  @Column({ type: "text" })
  password!: string;
}
