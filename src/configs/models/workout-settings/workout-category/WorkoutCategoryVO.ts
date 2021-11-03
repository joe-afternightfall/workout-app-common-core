import { WorkoutCategoryDAO } from './WorkoutCategoryDAO';

export class WorkoutCategoryVO extends WorkoutCategoryDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    color: string,
    manikinMuscleGroupIds: string[],
    active: boolean
  ) {
    super(id, name, color, manikinMuscleGroupIds, active);
    this.firebaseId = firebaseId;
  }
}
