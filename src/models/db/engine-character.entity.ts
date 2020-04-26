import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum CharacterTeamEnum {
  UNDEFINED = 'UNDEFINED',
  TEAM_A = 'TEAM_A',
  TEAM_B = 'TEAM_B',
}

@Entity('engine_charater')
export class EngineCharacterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: CharacterTeamEnum,
    default: CharacterTeamEnum.UNDEFINED,
  })
  team: CharacterTeamEnum;

  @Column({ nullable: true })
  name?: string;

  @Column()
  level: number;

  @Column()
  currentHp: number;

  @Column()
  maxHp: number;

  // TODO
  // actions;

  @Column()
  armor: number;

  @Column()
  power: number;

  @Column()
  dexterity: number;

  @Column()
  stamina: number;

  @Column()
  minDamage: number;

  @Column()
  maxDamage: number;
}
