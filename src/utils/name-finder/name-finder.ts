import {
  ExerciseVO,
  parameterTypes,
  trainingSetTypes,
  TrainingSetType,
  phases,
} from '../../configs';

export const getExerciseName = (
  allExercises: ExerciseVO[],
  id: string
): string => {
  const foundExercise = allExercises.find(
    (exercise: ExerciseVO) => exercise.id === id
  );

  return foundExercise ? foundExercise.name : '';
};

export const getParameterTypeName = (id: string): string | undefined => {
  const foundType = parameterTypes.find((type) => type.id === id);

  return foundType && foundType.name;
};

export const getSetTypeName = (id: string): string | undefined => {
  const foundType = trainingSetTypes.find(
    (set: TrainingSetType) => set.id === id
  );

  return foundType && foundType.name;
};

export const getPhaseName = (id: string): string | undefined => {
  const foundPhase = phases.find((phase) => phase.id === id);

  return foundPhase && foundPhase.name;
};
