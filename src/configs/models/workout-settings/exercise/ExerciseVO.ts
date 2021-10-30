import { ExerciseDAO, MusclesWorked } from './ExerciseDAO';

export class ExerciseVO extends ExerciseDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    description: string,
    equipmentIds: string[],
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
      equipmentIds,
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
