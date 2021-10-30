import { MuscleDAO } from './MuscleDAO';

export class MuscleVO extends MuscleDAO {
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
