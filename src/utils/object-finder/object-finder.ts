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

export const findExercise = (
  id: string,
  active: boolean
): ExerciseVO | undefined => {
  let promise;
  let foundExercise;
  if (active) {
    promise = getAllActiveExercises();
  } else {
    promise = getAllDeActivatedExercises();
  }
  promise.then((exercises: ExerciseVO[]) => {
    exercises.find((exercise: ExerciseVO) => {
      if (exercise.id === id) {
        foundExercise = exercise;
      }
    });
  });
  return foundExercise;
};

export const findGripType = (
  id: string,
  active: boolean
): GripTypeVO | undefined => {
  let promise;
  let foundGripType;
  if (active) {
    promise = getAllActiveGripTypes();
  } else {
    promise = getAllDeActivatedGripTypes();
  }
  promise.then((gripTypes: GripTypeVO[]) => {
    gripTypes.find((gripType: GripTypeVO) => {
      if (gripType.id === id) {
        foundGripType = gripType;
      }
    });
  });
  return foundGripType;
};

export const findGripWidth = (
  id: string,
  active: boolean
): GripWidthVO | undefined => {
  let promise;
  let foundGripWidth;
  if (active) {
    promise = getAllActiveGripWidths();
  } else {
    promise = getAllDeActivatedGripWidths();
  }
  promise.then((gripWidths: GripWidthVO[]) => {
    gripWidths.find((gripWidth: GripWidthVO) => {
      if (gripWidth.id === id) {
        foundGripWidth = gripWidth;
      }
    });
  });
  return foundGripWidth;
};

export const findManikinMuscleGroup = (
  id: string,
  active: boolean
): ManikinMuscleGroupVO | undefined => {
  let promise;
  let foundManikinMuscleGroup;
  if (active) {
    promise = getAllActiveManikinMuscleGroups();
  } else {
    promise = getAllActiveManikinMuscleGroups();
  }
  promise.then((manikinMuscleGroups: ManikinMuscleGroupVO[]) => {
    manikinMuscleGroups.find((manikinMuscleGroup: ManikinMuscleGroupVO) => {
      if (manikinMuscleGroup.id === id) {
        foundManikinMuscleGroup = manikinMuscleGroup;
      }
    });
  });
  return foundManikinMuscleGroup;
};

export const findMuscleTargetType = (
  id: string,
  active: boolean
): MuscleTargetTypeVO | undefined => {
  let promise;
  let foundMuscleTargetType;
  if (active) {
    promise = getAllActiveMuscleTargetTypes();
  } else {
    promise = getAllDeActivatedMuscleTargetTypes();
  }
  promise.then((muscleTargetTypes: MuscleTargetTypeVO[]) => {
    muscleTargetTypes.find((muscleTargetType: MuscleTargetTypeVO) => {
      if (muscleTargetType.id === id) {
        foundMuscleTargetType = muscleTargetType;
      }
    });
  });
  return foundMuscleTargetType;
};

export const findMuscle = (
  id: string,
  active: boolean
): MuscleVO | undefined => {
  let promise;
  let foundMuscle;
  if (active) {
    promise = getAllActiveMuscles();
  } else {
    promise = getAllDeActivatedMuscles();
  }
  promise.then((muscles) => {
    muscles.find((muscle: MuscleVO) => {
      if (muscle.id === id) {
        foundMuscle = muscle;
      }
    });
  });
  return foundMuscle;
};

export const findParameterType = (
  id: string,
  active: boolean
): ParameterTypeVO | undefined => {
  let promise;
  let parameterTypeToReturn;
  if (active) {
    promise = getAllActiveParameterTypes();
  } else {
    promise = getAllDeActivatedParameterTypes();
  }
  promise.then((parameterTypes: ParameterTypeVO[]) => {
    parameterTypes.find((parameterType: ParameterTypeVO) => {
      if (parameterType.id === id) {
        parameterTypeToReturn = parameterType;
      }
    });
  });
  return parameterTypeToReturn;
};

export const findPhase = (id: string, active: boolean): PhaseVO | undefined => {
  let promise;
  let foundPhase;
  if (active) {
    promise = getAllActivePhases();
  } else {
    promise = getAllDeActivatedPhases();
  }
  promise.then((phases: PhaseVO[]) => {
    phases.find((phase: PhaseVO) => {
      if (phase.id === id) {
        foundPhase = phase;
      }
    });
  });
  return foundPhase;
};

export const findRoutineTemplate = (
  id: string,
  active: boolean
): RoutineTemplateVO | undefined => {
  let promise;
  let foundRoutineTemplate;
  if (active) {
    promise = getAllActiveRoutineTemplates();
  } else {
    promise = getAllDeActivatedRoutineTemplates();
  }
  promise.then((routineTemplates: RoutineTemplateVO[]) => {
    routineTemplates.find((routineTemplate: RoutineTemplateVO) => {
      if (routineTemplate.id === id) {
        foundRoutineTemplate = routineTemplate;
      }
    });
  });
  return foundRoutineTemplate;
};

export const findTrainingSetType = (
  id: string,
  active: boolean
): TrainingSetTypeVO | undefined => {
  let promise;
  let foundTrainingSetType;
  if (active) {
    promise = getAllActiveTrainingSetTypes();
  } else {
    promise = getAllDeActivatedTrainingSetTypes();
  }
  promise.then((trainingSetTypes: TrainingSetTypeVO[]) => {
    trainingSetTypes.find((trainingSetType: TrainingSetTypeVO) => {
      if (trainingSetType.id === id) {
        foundTrainingSetType = trainingSetType;
      }
    });
  });
  return foundTrainingSetType;
};

export const findWorkoutCategory = (
  id: string,
  active: boolean
): WorkoutCategoryVO | undefined => {
  let promise;
  let foundWorkoutCategory;
  if (active) {
    promise = getAllActiveWorkoutCategories();
  } else {
    promise = getAllDeActivatedWorkoutCategories();
  }
  promise.then((workoutCategories: WorkoutCategoryVO[]) => {
    workoutCategories.find((workoutCategory: WorkoutCategoryVO) => {
      if (workoutCategory.id === id) {
        foundWorkoutCategory = workoutCategory;
      }
    });
  });
  return foundWorkoutCategory;
};

export const findWorkoutEquipment = (
  id: string,
  active: boolean
): WorkoutEquipmentVO | undefined => {
  let promise;
  let foundWorkoutEquipment;
  if (active) {
    promise = getAllActiveWorkoutEquipment();
  } else {
    promise = getAllDeActivatedWorkoutEquipment();
  }
  promise.then((workoutEquipment: WorkoutEquipmentVO[]) => {
    workoutEquipment.find((workoutEquipment: WorkoutEquipmentVO) => {
      if (workoutEquipment.id === id) {
        foundWorkoutEquipment = workoutEquipment;
      }
    });
  });
  return foundWorkoutEquipment;
};
