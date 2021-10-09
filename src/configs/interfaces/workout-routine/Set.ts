import { WorkoutDuration } from './WorkoutDuration';
import { WorkoutDistance } from './WorkoutDistance';
import { WorkoutTimer } from './WorkoutTimer';

export interface Set {
  id: string;
  setNumber: number;
  weight: number;
  reps: number;
  duration?: WorkoutDuration;
  distance?: WorkoutDistance;
  timers?: WorkoutTimer[];
  markedDone: boolean;
}
