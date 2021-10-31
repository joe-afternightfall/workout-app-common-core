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

export const findExercise = async (
  id: string,
  active: boolean
): Promise<ParameterTypeVO | undefined> => {
  let exercises;
  if (active) {
    exercises = await getAllActiveExercises();
  } else {
    exercises = await getAllDeActivatedExercises();
  }
  return exercises.find((exercise: ExerciseVO) => exercise.id === id);
};

export const findGripType = async (
  id: string,
  active: boolean
): Promise<GripTypeVO | undefined> => {
  let gripTypes;
  if (active) {
    gripTypes = await getAllActiveGripTypes();
  } else {
    gripTypes = await getAllDeActivatedGripTypes();
  }
  return gripTypes.find((gripType: GripTypeVO) => gripType.id === id);
};

export const findGripWidth = async (
  id: string,
  active: boolean
): Promise<GripWidthVO | undefined> => {
  let gripWidths;
  if (active) {
    gripWidths = await getAllActiveGripWidths();
  } else {
    gripWidths = await getAllDeActivatedGripWidths();
  }
  return gripWidths.find((gripWidth: GripWidthVO) => gripWidth.id === id);
};

export const findManikinMuscleGroup = async (
  id: string,
  active: boolean
): Promise<ManikinMuscleGroupVO | undefined> => {
  let manikinMuscleGroups;
  if (active) {
    manikinMuscleGroups = await getAllActiveManikinMuscleGroups();
  } else {
    manikinMuscleGroups = await getAllActiveManikinMuscleGroups();
  }
  return manikinMuscleGroups.find(
    (manikinMuscleGroup: ManikinMuscleGroupVO) => manikinMuscleGroup.id === id
  );
};

export const findMuscleTargetType = async (
  id: string,
  active: boolean
): Promise<MuscleTargetTypeVO | undefined> => {
  let muscleTargetTypes;
  if (active) {
    muscleTargetTypes = await getAllActiveMuscleTargetTypes();
  } else {
    muscleTargetTypes = await getAllDeActivatedMuscleTargetTypes();
  }
  return muscleTargetTypes.find(
    (muscleTargetType: MuscleTargetTypeVO) => muscleTargetType.id === id
  );
};

export const findMuscle = async (
  id: string,
  active: boolean
): Promise<MuscleVO | undefined> => {
  let muscles;
  if (active) {
    muscles = await getAllActiveMuscles();
  } else {
    muscles = await getAllDeActivatedMuscles();
  }
  return muscles.find((muscle: MuscleVO) => muscle.id === id);
};

export const findParameterType = async (
  id: string,
  active: boolean
): Promise<ParameterTypeVO | undefined> => {
  let parameterTypes;
  if (active) {
    parameterTypes = await getAllActiveParameterTypes();
  } else {
    parameterTypes = await getAllDeActivatedParameterTypes();
  }
  return parameterTypes.find(
    (parameterType: ParameterTypeVO) => parameterType.id === id
  );
};

export const findPhase = async (
  id: string,
  active: boolean
): Promise<PhaseVO | undefined> => {
  let phases;
  if (active) {
    phases = await getAllActivePhases();
  } else {
    phases = await getAllDeActivatedPhases();
  }
  return phases.find((phase: PhaseVO) => phase.id === id);
};

export const findRoutineTemplate = async (
  id: string,
  active: boolean
): Promise<RoutineTemplateVO | undefined> => {
  let routineTemplates;
  if (active) {
    routineTemplates = await getAllActiveRoutineTemplates();
  } else {
    routineTemplates = await getAllDeActivatedRoutineTemplates();
  }
  return routineTemplates.find(
    (routineTemplate: RoutineTemplateVO) => routineTemplate.id === id
  );
};

export const findTrainingSetType = async (
  id: string,
  active: boolean
): Promise<TrainingSetTypeVO | undefined> => {
  let trainingSetTypes;
  if (active) {
    trainingSetTypes = await getAllActiveTrainingSetTypes();
  } else {
    trainingSetTypes = await getAllDeActivatedTrainingSetTypes();
  }
  return trainingSetTypes.find(
    (trainingSetType: TrainingSetTypeVO) => trainingSetType.id === id
  );
};

export const findWorkoutCategory = async (
  id: string,
  active: boolean
): Promise<WorkoutCategoryVO | undefined> => {
  let workoutCategories;
  if (active) {
    workoutCategories = await getAllActiveWorkoutCategories();
  } else {
    workoutCategories = await getAllDeActivatedWorkoutCategories();
  }
  return workoutCategories.find(
    (workoutCategory: WorkoutCategoryVO) => workoutCategory.id === id
  );
};

export const findWorkoutEquipment = async (
  id: string,
  active: boolean
): Promise<WorkoutEquipmentVO | undefined> => {
  let workoutEquipment;
  if (active) {
    workoutEquipment = await getAllActiveWorkoutEquipment();
  } else {
    workoutEquipment = await getAllDeActivatedWorkoutEquipment();
  }
  return workoutEquipment.find(
    (workoutEquipment: WorkoutEquipmentVO) => workoutEquipment.id === id
  );
};
