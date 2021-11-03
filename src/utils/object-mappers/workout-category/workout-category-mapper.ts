import { WorkoutCategoryDAO, WorkoutCategoryVO } from '../../../configs';

export interface WorkoutCategorySnapshot {
  [key: string]: WorkoutCategoryDAO;
}

export const mapWorkoutCategorySnapshotToVO = (
  snapshot: WorkoutCategorySnapshot
): WorkoutCategoryVO[] => {
  return Object.keys(snapshot).map((key: string) => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      color: snapshot[key].color,
      manikinMuscleGroupIds: snapshot[key].manikinMuscleGroupIds,
      active: snapshot[key].active,
    };
  });
};
