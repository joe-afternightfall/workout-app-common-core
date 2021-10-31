import {
  PhaseVO,
  ExerciseVO,
  ParameterTypeVO,
  TrainingSetTypeVO,
  GripTypeVO,
  GripWidthVO,
  ManikinMuscleGroupVO,
  MuscleTargetTypeVO,
  MuscleVO,
  RoutineTemplateVO,
  WorkoutCategoryVO,
  WorkoutEquipmentVO,
} from '../../configs';
import {
  getAllActiveExercises,
  getAllActiveGripTypes,
  getAllActiveGripWidths,
  getAllActiveManikinMuscleGroups,
  getAllActiveMuscles,
  getAllActiveMuscleTargetTypes,
  getAllActiveParameterTypes,
  getAllActivePhases,
  getAllActiveRoutineTemplates,
  getAllActiveTrainingSetTypes,
  getAllActiveWorkoutCategories,
  getAllActiveWorkoutEquipment,
  getAllDeActivatedExercises,
  getAllDeActivatedGripTypes,
  getAllDeActivatedGripWidths,
  getAllDeActivatedMuscles,
  getAllDeActivatedMuscleTargetTypes,
  getAllDeActivatedParameterTypes,
  getAllDeActivatedPhases,
  getAllDeActivatedRoutineTemplates,
  getAllDeActivatedTrainingSetTypes,
  getAllDeActivatedWorkoutCategories,
  getAllDeActivatedWorkoutEquipment,
} from '../../services';

export const findActiveExercise = async (
  id: string
): Promise<ParameterTypeVO | undefined> => {
  const activeExercises = await getAllActiveExercises();
  return activeExercises.find((exercise: ExerciseVO) => exercise.id === id);
};

export const findDeActivatedExercise = async (
  id: string
): Promise<ParameterTypeVO | undefined> => {
  const deActivatedExercises = await getAllDeActivatedExercises();
  return deActivatedExercises.find(
    (exercise: ExerciseVO) => exercise.id === id
  );
};

export const findActiveGripType = async (
  id: string
): Promise<GripTypeVO | undefined> => {
  const activeGripTypes = await getAllActiveGripTypes();
  return activeGripTypes.find((gripType: GripTypeVO) => gripType.id === id);
};

export const findDeActivatedGripType = async (
  id: string
): Promise<GripTypeVO | undefined> => {
  const deActivatedGripTypes = await getAllDeActivatedGripTypes();
  return deActivatedGripTypes.find(
    (gripType: GripTypeVO) => gripType.id === id
  );
};

export const findActiveGripWidth = async (
  id: string
): Promise<GripWidthVO | undefined> => {
  const activeGripWidths = await getAllActiveGripWidths();
  return activeGripWidths.find((gripWidth: GripWidthVO) => gripWidth.id === id);
};

export const findDeActivatedGripWidth = async (
  id: string
): Promise<GripWidthVO | undefined> => {
  const deActivatedGripWidths = await getAllDeActivatedGripWidths();
  return deActivatedGripWidths.find(
    (gripWidth: GripWidthVO) => gripWidth.id === id
  );
};

export const findActiveManikinMuscleGroup = async (
  id: string
): Promise<ManikinMuscleGroupVO | undefined> => {
  const activeManikinMuscleGroups = await getAllActiveManikinMuscleGroups();
  return activeManikinMuscleGroups.find(
    (manikinMuscleGroup: ManikinMuscleGroupVO) => manikinMuscleGroup.id === id
  );
};

export const findDeActivatedManikinMuscleGroup = async (
  id: string
): Promise<ManikinMuscleGroupVO | undefined> => {
  const activeManikinMuscleGroups = await getAllActiveManikinMuscleGroups();
  return activeManikinMuscleGroups.find(
    (manikinMuscleGroup: ManikinMuscleGroupVO) => manikinMuscleGroup.id === id
  );
};

export const findActiveMuscleTargetType = async (
  id: string
): Promise<MuscleTargetTypeVO | undefined> => {
  const activeMuscleTypes = await getAllActiveMuscleTargetTypes();
  return activeMuscleTypes.find(
    (muscleTargetType: MuscleTargetTypeVO) => muscleTargetType.id === id
  );
};

export const findDeActivatedMuscleTargetType = async (
  id: string
): Promise<MuscleTargetTypeVO | undefined> => {
  const deActivatedMuscleTypes = await getAllDeActivatedMuscleTargetTypes();
  return deActivatedMuscleTypes.find(
    (muscleTargetType: MuscleTargetTypeVO) => muscleTargetType.id === id
  );
};

export const findActiveMuscle = async (
  id: string
): Promise<MuscleVO | undefined> => {
  const activeMuscles = await getAllActiveMuscles();
  return activeMuscles.find((muscle: MuscleVO) => muscle.id === id);
};

export const findDeActivatedMuscle = async (
  id: string
): Promise<MuscleVO | undefined> => {
  const deActivatedMuscles = await getAllDeActivatedMuscles();
  return deActivatedMuscles.find((muscle: MuscleVO) => muscle.id === id);
};

export const findActiveParameterType = async (
  id: string
): Promise<ParameterTypeVO | undefined> => {
  const activeParameterTypes = await getAllActiveParameterTypes();
  return activeParameterTypes.find(
    (parameterType: ParameterTypeVO) => parameterType.id === id
  );
};

export const findDeActivatedParameterType = async (
  id: string
): Promise<ParameterTypeVO | undefined> => {
  const deActivatedParameterTypes = await getAllDeActivatedParameterTypes();
  return deActivatedParameterTypes.find(
    (parameterType: ParameterTypeVO) => parameterType.id === id
  );
};

export const findActivePhase = async (
  id: string
): Promise<PhaseVO | undefined> => {
  const activePhases = await getAllActivePhases();
  return activePhases.find((phase: PhaseVO) => phase.id === id);
};

export const findDeActivatedPhase = async (
  id: string
): Promise<PhaseVO | undefined> => {
  const deActivatedPhases = await getAllDeActivatedPhases();
  return deActivatedPhases.find((phase: PhaseVO) => phase.id === id);
};

export const findActiveRoutineTemplate = async (
  id: string
): Promise<RoutineTemplateVO | undefined> => {
  const activeRoutineTemplates = await getAllActiveRoutineTemplates();
  return activeRoutineTemplates.find(
    (routineTemplate: RoutineTemplateVO) => routineTemplate.id === id
  );
};

export const findDeActivatedRoutineTemplate = async (
  id: string
): Promise<RoutineTemplateVO | undefined> => {
  const deActivatedRoutineTemplates = await getAllDeActivatedRoutineTemplates();
  return deActivatedRoutineTemplates.find(
    (routineTemplate: RoutineTemplateVO) => routineTemplate.id === id
  );
};

export const findActiveTrainingSetType = async (
  id: string
): Promise<TrainingSetTypeVO | undefined> => {
  const activeTrainingSetTypes = await getAllActiveTrainingSetTypes();
  return activeTrainingSetTypes.find(
    (trainingSetType: TrainingSetTypeVO) => trainingSetType.id === id
  );
};

export const findDeActivatedTrainingSetType = async (
  id: string
): Promise<TrainingSetTypeVO | undefined> => {
  const deActivatedTrainingSetTypes = await getAllDeActivatedTrainingSetTypes();
  return deActivatedTrainingSetTypes.find(
    (trainingSetType: TrainingSetTypeVO) => trainingSetType.id === id
  );
};

export const findActiveWorkoutCategory = async (
  id: string
): Promise<WorkoutCategoryVO | undefined> => {
  const activeWorkoutCategories = await getAllActiveWorkoutCategories();
  return activeWorkoutCategories.find(
    (workoutCategory: WorkoutCategoryVO) => workoutCategory.id === id
  );
};

export const findDeActivatedWorkoutCategory = async (
  id: string
): Promise<WorkoutCategoryVO | undefined> => {
  const deActivatedWorkoutCategories =
    await getAllDeActivatedWorkoutCategories();
  return deActivatedWorkoutCategories.find(
    (workoutCategory: WorkoutCategoryVO) => workoutCategory.id === id
  );
};

export const findActiveWorkoutEquipment = async (
  id: string
): Promise<WorkoutEquipmentVO | undefined> => {
  const activeWorkoutEquipment = await getAllActiveWorkoutEquipment();
  return activeWorkoutEquipment.find(
    (workoutEquipment: WorkoutEquipmentVO) => workoutEquipment.id === id
  );
};

export const findDeActivatedWorkoutEquipment = async (
  id: string
): Promise<WorkoutEquipmentVO | undefined> => {
  const deActivatedWorkoutEquipment = await getAllDeActivatedWorkoutEquipment();
  return deActivatedWorkoutEquipment.find(
    (workoutEquipment: WorkoutEquipmentVO) => workoutEquipment.id === id
  );
};
