import { Injectable } from '@nestjs/common';
import { createEngine, IEngineCharacter, IEncounterState } from 'wyrm-engine';
import { toEncounterEntity } from '../mapper/encounter.mapper';

@Injectable()
export class WyrmService {
  private wyrmEngine = createEngine();

  createEncounter(
    teamA: IEngineCharacter[],
    teamB: IEngineCharacter[],
  ): IEncounterState {
    const encounter = this.wyrmEngine.createEncounter(teamA, teamB);
    const encounterState = encounter.getState();

    const encounterEntity = toEncounterEntity(encounterState);

    // TODO: persist new entity

    return encounterState;
  }

  addAction(encounterId: string) {}

  tick(encounterId: string) {}
}
