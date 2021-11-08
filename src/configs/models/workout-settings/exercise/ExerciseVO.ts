import { ExerciseDAO } from './ExerciseDAO';
import { MusclesWorked } from '../../../interfaces';
import { ExtraInfo } from '../../../interfaces/exercise-settings/ExtraInfo';

export class ExerciseVO extends ExerciseDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    // todo: depricate description
    description: string,
    extraInfo: ExtraInfo[],
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
      extraInfo,
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
