import {
  PhaseVO,
  ExerciseVO,
  TrainingSetTypeVO,
  WorkoutEquipmentVO,
  ManikinMuscleGroupVO,
  MuscleVO,
  GripTypeVO,
  GripWidthVO,
  MuscleTargetTypeVO,
  ParameterTypeVO,
  WorkoutCategoryVO,
} from '../../configs';

export const getExerciseName = (
  exercises: ExerciseVO[],
  id: string
): string | undefined => {
  const foundExercise = exercises.find((exercise) => exercise.id === id);
  return foundExercise && foundExercise.name;
};

export const getTrainingSetTypeName = (
  trainingSetTypes: TrainingSetTypeVO[],
  id: string
): string | undefined => {
  const foundSetType = trainingSetTypes.find((setType) => setType.id === id);
  return foundSetType && foundSetType.name;
};

export const getPhaseName = (
  phases: PhaseVO[],
  id: string
): string | undefined => {
  const foundPhase = phases.find((phase) => phase.id === id);
  return foundPhase && foundPhase.name;
};

export const getWorkoutEquipmentName = (
  equipmentList: WorkoutEquipmentVO[],
  id: string
): string | undefined => {
  const foundEquipment = equipmentList.find((equipment) => equipment.id === id);
  return foundEquipment && foundEquipment.name;
};

export const getManikinMuscleName = (
  manikinMuscles: ManikinMuscleGroupVO[],
  id: string
): string | undefined => {
  const foundMuscle = manikinMuscles.find((muscle) => muscle.id === id);
  return foundMuscle && foundMuscle.name;
};

export const getMuscleName = (
  muscles: MuscleVO[],
  id: string
): string | undefined => {
  const foundMuscle = muscles.find((muscle) => muscle.id === id);
  return foundMuscle && foundMuscle.name;
};

export const getGripTypeName = (
  gripTypes: GripTypeVO[],
  id: string
): string | undefined => {
  const foundGripType = gripTypes.find((gripType) => gripType.id === id);
  return foundGripType && foundGripType.name;
};

export const getGripWidthName = (
  gripWidths: GripWidthVO[],
  id: string
): string | undefined => {
  const foundGripWidth = gripWidths.find((gripWidth) => gripWidth.id === id);
  return foundGripWidth && foundGripWidth.name;
};

export const getMuscleTargetTypeName = (
  muscleTargetTypes: MuscleTargetTypeVO[],
  id: string
): string | undefined => {
  const foundTargetType = muscleTargetTypes.find(
    (targetType) => targetType.id === id
  );
  return foundTargetType && foundTargetType.name;
};

export const getParameterTypeName = (
  parameterTypes: ParameterTypeVO[],
  id: string
): string | undefined => {
  const foundParameterType = parameterTypes.find(
    (parameterType) => parameterType.id === id
  );
  return foundParameterType && foundParameterType.name;
};

export const getWorkoutCategoryName = (
  workoutCategories: WorkoutCategoryVO[],
  id: string
): string | undefined => {
  const foundWorkoutCategory = workoutCategories.find(
    (category) => category.id === id
  );
  return foundWorkoutCategory && foundWorkoutCategory.name;
};
