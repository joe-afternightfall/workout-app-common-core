import {
  findExercise,
  findGripType,
  findManikinMuscleGroup,
  findMuscle,
  findMuscleTargetType,
  findParameterType,
  findPhase,
  findRoutineTemplate,
  findTrainingSetType,
  findWorkoutCategory,
  findWorkoutEquipment,
} from '../object-finder';

export const getExerciseName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundExercise = findExercise(id, active);
  return foundExercise && foundExercise.name;
};

export const getGripTypeName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundGripType = findGripType(id, active);
  return foundGripType && foundGripType.name;
};

export const getGripWidthName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundGripType = findGripType(id, active);
  return foundGripType && foundGripType.name;
};

export const getManikinMuscleGroupName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundManikinMuscleGroup = findManikinMuscleGroup(id, active);
  return foundManikinMuscleGroup && foundManikinMuscleGroup.name;
};

export const getMuscleTargetTypeName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundMuscleTargetType = findMuscleTargetType(id, active);
  return foundMuscleTargetType && foundMuscleTargetType.name;
};

export const getMuscleName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundMuscle = findMuscle(id, active);
  return foundMuscle && foundMuscle.name;
};

export const getParameterTypeName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundParameterType = findParameterType(id, active);
  return foundParameterType && foundParameterType.name;
};

export const getPhaseName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundPhase = findPhase(id, active);
  return foundPhase && foundPhase.name;
};

export const getRoutineTemplateName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundRoutineTemplate = findRoutineTemplate(id, active);
  return foundRoutineTemplate && foundRoutineTemplate.name;
};

export const getTrainingSetTypeName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundTrainingSetType = findTrainingSetType(id, active);
  return foundTrainingSetType && foundTrainingSetType.name;
};

export const getWorkoutCategoryName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundWorkoutCategory = findWorkoutCategory(id, active);
  return foundWorkoutCategory && foundWorkoutCategory.name;
};

export const getWorkoutEquipmentName = (
  id: string,
  active: boolean
): string | undefined => {
  const foundWorkoutEquipment = findWorkoutEquipment(id, active);
  return foundWorkoutEquipment && foundWorkoutEquipment.name;
};
