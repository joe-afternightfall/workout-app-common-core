import { Phase } from '../../interfaces';
import { RoutineTemplateDAO } from './RoutineTemplateDAO';

export class RoutineTemplateVO extends RoutineTemplateDAO {
  firebaseId: string;

  constructor(
    id: string,
    name: string,
    workoutCategoryId: string,
    phases: Phase[],
    firebaseId: string,
    active: boolean
  ) {
    super(id, name, workoutCategoryId, phases, active);
    this.firebaseId = firebaseId;
  }
}
