import { MuscleWorkedDAO } from './MuscleWorkedDAO';

export class MuscleWorkedVO extends MuscleWorkedDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    manikinMuscleGroupId: string,
    active: boolean
  ) {
    super(id, name, manikinMuscleGroupId, active);
    this.firebaseId = firebaseId;
  }
}
