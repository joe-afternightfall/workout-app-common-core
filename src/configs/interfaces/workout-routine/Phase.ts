import { Segment } from './Segment';

export interface Phase {
  id: string;
  phaseId: string;
  order: number;
  segments: Segment[];
}
