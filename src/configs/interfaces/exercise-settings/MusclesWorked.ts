export interface MuscleInfo {
  id: string;
  order: number;
  muscleId: string;
  muscleTargetTypeId: string;
}

export interface MusclesWorked {
  primary: MuscleInfo[];
  secondary: MuscleInfo[];
}
