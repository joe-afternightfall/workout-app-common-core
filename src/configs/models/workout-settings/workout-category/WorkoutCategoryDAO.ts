export class WorkoutCategoryDAO {
  id: string;
  name: string; // ex(back & bi's | chest & tri's | cardio | shoulders)
  color: string;
  manikinMuscleGroupIds: string[];
  active: boolean;

  constructor(
    id: string,
    name: string,
    color: string,
    manikinMuscleGroupIds: string[],
    active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.color = color;
    this.manikinMuscleGroupIds = manikinMuscleGroupIds;
    this.active = active;
  }
}
