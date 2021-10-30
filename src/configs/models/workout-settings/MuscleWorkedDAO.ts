export class MuscleWorkedDAO {
  id: string;
  name: string;
  manikinMuscleGroupId: string;
  active: boolean;

  constructor(
    id: string,
    name: string,
    manikinMuscleGroupId: string,
    active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.manikinMuscleGroupId = manikinMuscleGroupId;
    this.active = active;
  }
}
