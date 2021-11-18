import { WorkoutDuration } from './WorkoutDuration';
import { WorkoutDistance } from './WorkoutDistance';

export interface Set {
  id: string;
  setNumber: number;
  weight: number;
  reps: number;
  duration?: WorkoutDuration;
  distance?: WorkoutDistance;
  markedDone: boolean;
}
