import { ExerciseDAO } from './ExerciseDAO';
import { MusclesWorked } from '../../../interfaces';

export class ExerciseVO extends ExerciseDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    description: string,
    workoutEquipmentIds: string[],
    manikinMuscleGroupIds: string[],
    musclesWorked: MusclesWorked,
    iconId: string,
    gripTypeId: string,
    gripWidthId: string,
    parameterTypeId: string,
    alternateSides: boolean,
    active: boolean
  ) {
    super(
      id,
      name,
      description,
      workoutEquipmentIds,
      manikinMuscleGroupIds,
      musclesWorked,
      iconId,
      gripTypeId,
      gripWidthId,
      parameterTypeId,
      alternateSides,
      active
    );
    this.firebaseId = firebaseId;
  }
}
