import {
  EngineCharacterEntity,
  CharacterTeamEnum,
} from '../models/db/engine-character.entity';
import { IEngineCharacter, TeamEnum } from 'wyrm-engine';
import { pick } from 'lodash';

export function toEngineCharacterEntity(
  engineCharacter: IEngineCharacter,
): EngineCharacterEntity {
  return {
    ...pick(engineCharacter, 'id', 'name', 'level', 'currentHp', 'maxHp'),
    team: toCharacterTeamEnum(engineCharacter.team),
    ...pick(engineCharacter.stats, 'armor', 'power', 'dexterity', 'stamina'),
    minDamage: engineCharacter.stats.damage.min,
    maxDamage: engineCharacter.stats.damage.max,
  };
}

function toCharacterTeamEnum(teamEnum: TeamEnum): CharacterTeamEnum {
  switch (teamEnum) {
    case TeamEnum.teamA:
      return CharacterTeamEnum.TEAM_A;
    case TeamEnum.teamB:
      return CharacterTeamEnum.TEAM_B;
    default:
      return CharacterTeamEnum.UNDEFINED;
  }
}
