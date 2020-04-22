import { Injectable } from '@nestjs/common';
import { createEngine } from 'wyrm-engine';
import { CreateEncounterRequest } from '../models/api/create-encounter-request';

@Injectable()
export class WyrmService {
  private wyrmEngine = createEngine();

  createEncounter(request: CreateEncounterRequest) {
    const encounter = this.wyrmEngine.createEncounter(
      request.teamA,
      request.teamB,
    );
  }

  addAction() {}

  tick() {}
}
