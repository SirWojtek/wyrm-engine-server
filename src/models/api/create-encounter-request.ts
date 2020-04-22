import { ICharacter } from 'wyrm-engine';
import { MinLength } from 'class-validator';

export class CreateEncounterRequest {
  @MinLength(1)
  teamA: ICharacter[];

  @MinLength(1)
  teamB: ICharacter[];
}
