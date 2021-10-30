import { ManikinMuscleGroupDAO, ManikinMuscleGroupVO } from '../../../configs';

export interface ManikinMuscleGroupSnapshot {
  [key: string]: ManikinMuscleGroupDAO;
}

export const mapManikinMuscleGroupSnapshotToVO = (
  snapshot: ManikinMuscleGroupSnapshot
): ManikinMuscleGroupVO[] => {
  return Object.keys(snapshot).map((key: string) => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      active: snapshot[key].active,
    };
  });
};
