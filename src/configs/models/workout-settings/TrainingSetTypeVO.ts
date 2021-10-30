import { TrainingSetTypeDAO } from './TrainingSetTypeDAO';

export class TrainingSetTypeVO extends TrainingSetTypeDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    description: string,
    iconId: string,
    active: boolean
  ) {
    super(id, name, description, iconId, active);
    this.firebaseId = firebaseId;
  }
}
