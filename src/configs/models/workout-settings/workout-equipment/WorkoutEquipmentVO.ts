import { WorkoutEquipmentDAO } from './WorkoutEquipmentDAO';

export class WorkoutEquipmentVO extends WorkoutEquipmentDAO {
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
