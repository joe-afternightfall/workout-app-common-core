import {
  PhaseVO,
  ExerciseVO,
  ParameterTypeVO,
  TrainingSetTypeVO,
} from '../../configs';
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

export const getExerciseName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundExercise = await findExercise(id, active);
  return foundExercise && foundExercise.name;
};

export const getGripTypeName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundGripType = await findGripType(id, active);
  return foundGripType && foundGripType.name;
};

export const getGripWidthName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundGripType = await findGripType(id, active);
  return foundGripType && foundGripType.name;
};

export const getManikinMuscleGroupName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundManikinMuscleGroup = await findManikinMuscleGroup(id, active);
  return foundManikinMuscleGroup && foundManikinMuscleGroup.name;
};

export const getMuscleTargetTypeName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundMuscleTargetType = await findMuscleTargetType(id, active);
  return foundMuscleTargetType && foundMuscleTargetType.name;
};

export const getMuscleName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundMuscle = await findMuscle(id, active);
  return foundMuscle && foundMuscle.name;
};

export const getParameterTypeName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundParameterType = await findParameterType(id, active);
  return foundParameterType && foundParameterType.name;
};

export const getPhaseName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundPhase = await findPhase(id, active);
  return foundPhase && foundPhase.name;
};

export const getRoutineTemplateName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundRoutineTemplate = await findRoutineTemplate(id, active);
  return foundRoutineTemplate && foundRoutineTemplate.name;
};

export const getTrainingSetTypeName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundTrainingSetType = await findTrainingSetType(id, active);
  return foundTrainingSetType && foundTrainingSetType.name;
};

export const getWorkoutCategoryName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundWorkoutCategory = await findWorkoutCategory(id, active);
  return foundWorkoutCategory && foundWorkoutCategory.name;
};

export const getWorkoutEquipmentName = async (
  id: string,
  active: boolean
): Promise<string | undefined> => {
  const foundWorkoutEquipment = await findWorkoutEquipment(id, active);
  return foundWorkoutEquipment && foundWorkoutEquipment.name;
};
