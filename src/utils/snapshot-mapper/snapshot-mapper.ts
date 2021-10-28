import {
  ExerciseDAO,
  ExerciseVO,
  RoutineTemplateDAO,
  RoutineTemplateVO,
} from '../../configs';

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
      equipmentId: snapshot[key].equipmentId,
      muscleGroupIds: snapshot[key].muscleGroupIds,
      iconId: snapshot[key].iconId,
      gripTypeId: snapshot[key].gripTypeId,
      gripWidthId: snapshot[key].gripWidthId,
      parameterTypeId: snapshot[key].parameterTypeId,
      alternateSides: snapshot[key].alternateSides,
    };
  });
};

export interface RoutineSnapshot {
  [key: string]: RoutineTemplateDAO;
}
export const mapRoutineSnapshotToVO = (
  snapshot: RoutineSnapshot
): RoutineTemplateVO[] => {
  return Object.keys(snapshot).map((key: string): RoutineTemplateVO => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      workoutCategoryId: snapshot[key].workoutCategoryId,
      phases: snapshot[key].phases,
    };
  });
};
