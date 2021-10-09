import { trainingSetTypes } from '../../configs/routine-settings';
import { TrainingSetType } from '../../configs/interfaces/ActiveWorkout';
import { parameterTypes } from '../../configs/routine-settings';
import { ExerciseVO } from '../../configs/models/workout-settings/ExerciseVO';

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
