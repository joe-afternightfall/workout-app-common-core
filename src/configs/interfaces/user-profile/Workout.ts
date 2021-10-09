import { Routine } from '../workout-routine/Routine';

export interface Workout {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  routine: Routine;
}
