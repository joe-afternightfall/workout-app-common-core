import { Set } from './Set';

export interface WorkoutExercise {
  id: string;
  order: number;
  exerciseId: string;
  sets: Set[];
}
