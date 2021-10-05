export {
  isStraightSet,
  isSuperset,
  isCircuitSet,
  isDuration,
  isRepsOnly,
  isWeightsAndReps,
} from './utils/workout-info';

export type {
  Set,
  Phase,
  Segment,
  Routine,
  GripType,
  GripWidth,
  BuiltSets,
  WorkoutTimer,
  ActiveSetInfo,
  ParameterType,
  TrainingSetType,
  WorkoutDistance,
  WorkoutDuration,
  WorkoutExercise,
} from './configs/interfaces/ActiveWorkout';

export type {
  UserHeight,
  UserWeight,
  Workout,
} from './configs/interfaces/UserProfile';

export { workoutCategories } from './configs/routine-settings/categories';
export { equipmentList } from './configs/routine-settings/equipment-list';
export { phases } from './configs/routine-settings/phases';
export { gripTypes } from './configs/routine-settings/exercise-types/grip-types';
export { gripWidths } from './configs/routine-settings/exercise-types/grip-widths';
export { parameterTypes } from './configs/routine-settings/exercise-types/parameter-types';
export { trainingSetTypes } from './configs/routine-settings/exercise-types/training-set-types';

export { WorkoutCategoryDAO } from './configs/models/workout-settings/WorkoutCategoryDAO';
export { WorkoutCategoryVO } from './configs/models/workout-settings/WorkoutCategoryVO';

export { RoutineTemplateDAO } from './configs/models/workout-settings/RoutineTemplateDAO';
export { RoutineTemplateVO } from './configs/models/workout-settings/RoutineTemplateVO';

export { PhaseDAO } from './configs/models/workout-settings/PhaseDAO';
export { PhaseVO } from './configs/models/workout-settings/PhaseVO';

export { ExerciseVO } from './configs/models/workout-settings/ExerciseVO';
export { ExerciseDAO } from './configs/models/workout-settings/ExerciseDAO';

export { EquipmentVO } from './configs/models/workout-settings/EquipmentVO';
export { EquipmentDAO } from './configs/models/workout-settings/EquipmentDAO';

export { SetType } from './models/workout-configurations/exercise-type/ExerciseTypeDAO';

export { CircuitTypeDAO } from './models/workout-configurations/circuit-type/CircuitTypeDAO';
export { CircuitTypeVO } from './models/workout-configurations/circuit-type/CircuitTypeVO';

export { ExerciseTypeDAO } from './models/workout-configurations/exercise-type/ExerciseTypeDAO';
export { ExerciseTypeVO } from './models/workout-configurations/exercise-type/ExerciseTypeVO';

export { CircuitTemplateDAO } from './models/CircuitTemplateDAO';
export { CircuitTemplateVO } from './models/CircuitTemplateVO';

export { UserProfileDAO } from './configs/models/user/UserProfileDAO';
export { UserProfileVO } from './configs/models/user/UserProfileVO';

export { WorkoutDAO } from './models/WorkoutDAO';
export { WorkoutVO } from './models/WorkoutVO';

export type { SetTemplate } from './models/CircuitTemplateDAO';
export type {
  Timer,
  CircuitExercise,
  CircuitExerciseSet,
  WorkoutCircuitProps,
} from './models/WorkoutDAO';
export type {
  Muscles,
  SideOfBody,
  MuscleGroup,
  BodySection,
} from './models/workout-configurations/MuscleGroups';

export { muscleGroups } from './models/workout-configurations/MuscleGroups';
