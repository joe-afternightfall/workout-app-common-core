import { ExerciseVO } from '../../models';
import { WorkoutDuration } from '../workout-routine/WorkoutDuration';
import { WorkoutDistance } from '../workout-routine/WorkoutDistance';
import { WorkoutTimer } from '../workout-routine/WorkoutTimer';

export interface BuiltSets {
  [key: number]: ActiveSetInfo[];
}

export interface ActiveSetInfo {
  setNumber: number;
  setId: string;
  segmentId: string;
  exercise: ExerciseVO | undefined;
  exerciseOrder: number;
  weight: number;
  reps: number;
  duration?: WorkoutDuration;
  distance?: WorkoutDistance;
  timers?: WorkoutTimer[];
  markedDone: boolean;
}
