import { ManikinMuscleGroupDAO } from './ManikinMuscleGroupDAO';

export class ManikinMuscleGroupVO extends ManikinMuscleGroupDAO {
  firebaseId: string;

  constructor(firebaseId: string, id: string, name: string, active: boolean) {
    super(id, name, active);
    this.firebaseId = firebaseId;
  }
}
