import {
  ExerciseVO,
  GripTypeVO,
  GripWidthVO,
  ManikinMuscleGroupVO,
  MuscleTargetTypeVO,
  MuscleVO,
  ParameterTypeVO,
  PhaseVO,
  TrainingSetTypeVO,
  WorkoutCategoryVO,
  WorkoutEquipmentVO,
} from '../../configs';

export const findExercise = (
  allExercises: ExerciseVO[],
  id: string
): ExerciseVO | undefined => {
  return allExercises.find((exercise) => exercise.id === id);
};

export const findTrainingSetType = (
  trainingSetTypes: TrainingSetTypeVO[],
  id: string
): TrainingSetTypeVO | undefined => {
  return trainingSetTypes.find((setType) => setType.id === id);
};

export const findPhase = (
  phases: PhaseVO[],
  id: string
): PhaseVO | undefined => {
  return phases.find((phase) => phase.id === id);
};

export const findWorkoutEquipment = (
  equipmentList: WorkoutEquipmentVO[],
  id: string
): WorkoutEquipmentVO | undefined => {
  return equipmentList.find((equipment) => equipment.id === id);
};

export const findManikinMuscleGroup = (
  manikinMuscleGroups: ManikinMuscleGroupVO[],
  id: string
): ManikinMuscleGroupVO | undefined => {
  return manikinMuscleGroups.find((group) => group.id === id);
};

export const findMuscle = (
  muscles: MuscleVO[],
  id: string
): MuscleVO | undefined => {
  return muscles.find((muscle) => muscle.id === id);
};

export const findGripType = (
  gripTypes: GripTypeVO[],
  id: string
): GripTypeVO | undefined => {
  return gripTypes.find((gripType) => gripType.id === id);
};

export const findGripWidth = (
  gripWidths: GripWidthVO[],
  id: string
): GripWidthVO | undefined => {
  return gripWidths.find((gripWidth) => gripWidth.id === id);
};

export const findMuscleTargetType = (
  muscleTargetTypes: MuscleTargetTypeVO[],
  id: string
): MuscleTargetTypeVO | undefined => {
  return muscleTargetTypes.find((targetType) => targetType.id === id);
};

export const findParameterType = (
  parameterTypes: ParameterTypeVO[],
  id: string
): ParameterTypeVO | undefined => {
  return parameterTypes.find((parameterType) => parameterType.id === id);
};

export const findWorkoutCategory = (
  workoutCategories: WorkoutCategoryVO[],
  id: string
): WorkoutCategoryVO | undefined => {
  return workoutCategories.find((category) => category.id === id);
};
