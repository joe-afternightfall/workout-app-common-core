import { MuscleDAO, MuscleVO } from '../../../configs';

export interface MuscleSnapshot {
  [key: string]: MuscleDAO;
}

export const mapMuscleSnapshotToVO = (snapshot: MuscleSnapshot): MuscleVO[] => {
  return Object.keys(snapshot).map((key: string): MuscleVO => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      manikinMuscleGroupId: snapshot[key].manikinMuscleGroupId,
      active: snapshot[key].active,
    };
  });
};
