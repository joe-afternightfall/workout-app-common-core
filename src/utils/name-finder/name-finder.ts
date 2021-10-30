import {
  PhaseVO,
  ExerciseVO,
  ParameterTypeVO,
  TrainingSetTypeVO,
} from '../../configs';

export const getExerciseName = (
  allExercises: ExerciseVO[],
  id: string
): string | undefined => {
  const foundExercise = allExercises.find(
    (exercise: ExerciseVO) => exercise.id === id
  );

  return foundExercise && foundExercise.name;
};

export const getParameterTypeName = (
  allParamTypes: ParameterTypeVO[],
  id: string
): string | undefined => {
  const foundType = allParamTypes.find((type) => type.id === id);

  return foundType && foundType.name;
};

export const getSetTypeName = (
  allSetTypes: TrainingSetTypeVO[],
  id: string
): string | undefined => {
  const foundType = allSetTypes.find((set: TrainingSetTypeVO) => set.id === id);

  return foundType && foundType.name;
};

export const getPhaseName = (
  allPhases: PhaseVO[],
  id: string
): string | undefined => {
  const foundPhase = allPhases.find((phase: PhaseVO) => phase.id === id);

  return foundPhase && foundPhase.name;
};
