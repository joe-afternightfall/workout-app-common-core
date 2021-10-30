import { Phase } from '../../interfaces';

export class RoutineTemplateDAO {
  id: string;
  name: string;
  workoutCategoryId: string;
  phases: Phase[];
  active: boolean;

  constructor(
    id: string,
    name: string,
    workoutCategoryId: string,
    phases: Phase[],
    active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.workoutCategoryId = workoutCategoryId;
    this.phases = phases;
    this.active = active;
  }
}
