import { IEncounterState } from 'wyrm-engine';
import { EncounterConfigEntity } from '../models/db/encounter-config.entity';
import { toEngineCharacterEntity } from './character.mapper';

export function toEncounterEntity(
  encounterState: IEncounterState,
): EncounterConfigEntity {
  const teamA = encounterState.teamA.map(toEngineCharacterEntity);
  const teamB = encounterState.teamB.map(toEngineCharacterEntity);

  return {
    id: encounterState.id,
    teamA,
    teamB,
  };
}
