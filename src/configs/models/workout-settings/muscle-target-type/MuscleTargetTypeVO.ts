import { MuscleTargetTypeDAO } from './MuscleTargetTypeDAO';

export class MuscleTargetTypeVO extends MuscleTargetTypeDAO {
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
