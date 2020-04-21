import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { EngineCharacterEntity } from './engine-character.entity';

@Entity('encounter_config')
export class EncounterConfigEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToMany(() => EngineCharacterEntity)
  @JoinTable()
  teamA: EngineCharacterEntity[];

  @ManyToMany(() => EngineCharacterEntity)
  @JoinTable()
  teamB: EngineCharacterEntity[];
}
