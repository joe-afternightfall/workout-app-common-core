import { MuscleTargetTypeDAO, MuscleTargetTypeVO } from '../../../configs';

export interface MuscleTargetTypeSnapshot {
  [key: string]: MuscleTargetTypeDAO;
}

export const mapMuscleTargetTypeSnapshotToVO = (
  snapshot: MuscleTargetTypeSnapshot
): MuscleTargetTypeVO[] => {
  return Object.keys(snapshot).map((key: string) => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      description: snapshot[key].description,
      active: snapshot[key].active,
    };
  });
};
