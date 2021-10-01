import { Routine } from './ActiveWorkout';

export interface UserWeight {
  id: string;
  weight: string;
  lastUpdatedOn: string;
}

export interface UserHeight {
  feet: string;
  inches: string;
}

export interface Workout {
  id: string;
  date: string;
  startTime: string;
  endTime: string;
  routine: Routine;
}
