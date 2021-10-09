export type SideOfBody = 'front' | 'back' | 'other';

export type BodySection = 'arms' | 'back' | 'legs' | 'core' | 'other';

export type Muscles =
  | 'biceps'
  | 'deltoids'
  | 'forearms'
  | 'triceps'
  | 'trapezius'
  | 'lats'
  | 'abs'
  | 'obliques'
  | 'pectorals'
  | 'adductors'
  | 'calves'
  | 'hamstrings'
  | 'glutes'
  | 'quads'
  | 'cardio'
  | 'full-body';

export interface MuscleGroup {
  id: string;
  sideOfBody: SideOfBody;
  bodySection: BodySection;
  name: Muscles;
}
