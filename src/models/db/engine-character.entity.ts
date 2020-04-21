import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('engine_charater')
export class EngineCharacterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
