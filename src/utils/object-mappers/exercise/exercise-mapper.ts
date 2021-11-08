import { ExerciseDAO, ExerciseVO } from '../../../configs';

export interface ExerciseSnapshot {
  [key: string]: ExerciseDAO;
}

export const mapExerciseSnapshotToVO = (
  snapshot: ExerciseSnapshot
): ExerciseVO[] => {
  return Object.keys(snapshot).map((key: string): ExerciseVO => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      description: snapshot[key].description,
      extraInfo: snapshot[key].extraInfo,
      workoutEquipmentIds: snapshot[key].workoutEquipmentIds,
      manikinMuscleGroupIds: snapshot[key].manikinMuscleGroupIds,
      musclesWorked: snapshot[key].musclesWorked,
      iconId: snapshot[key].iconId,
      gripTypeId: snapshot[key].gripTypeId,
      gripWidthId: snapshot[key].gripWidthId,
      parameterTypeId: snapshot[key].parameterTypeId,
      alternateSides: snapshot[key].alternateSides,
      active: snapshot[key].active,
    };
  });
};
