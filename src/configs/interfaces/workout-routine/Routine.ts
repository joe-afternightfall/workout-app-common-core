import { Phase } from './Phase';

export interface Routine {
  id: string;
  name: string;
  workoutCategoryId: string;
  phases: Phase[];
}
