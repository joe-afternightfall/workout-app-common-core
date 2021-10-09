import { Phase } from '../../interfaces';

export class RoutineTemplateDAO {
  id: string;
  name: string;
  workoutCategoryId: string;
  phases: Phase[];

  constructor(
    id: string,
    name: string,
    workoutCategoryId: string,
    phases: Phase[]
  ) {
    this.id = id;
    this.name = name;
    this.workoutCategoryId = workoutCategoryId;
    this.phases = phases;
  }
}
