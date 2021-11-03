import { PhaseDAO } from './PhaseDAO';

export class PhaseVO extends PhaseDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    description: string,
    active: boolean
  ) {
    super(id, name, description, active);
    this.firebaseId = firebaseId;
  }
}
