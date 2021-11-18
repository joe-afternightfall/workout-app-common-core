import { Set } from './Set';
import { WorkoutTimer } from './WorkoutTimer';

export interface WorkoutExercise {
  id: string;
  order: number;
  exerciseId: string;
  timers?: WorkoutTimer[];
  sets: Set[];
}
