import { WorkoutExercise } from './WorkoutExercise';

export interface Segment {
  id: string;
  order: number;
  trainingSetTypeId: string;
  secondsRestBetweenSets: number;
  secondsRestBetweenNextSegment: number;
  exercises: WorkoutExercise[];
}
