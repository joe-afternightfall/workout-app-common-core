import { WorkoutEquipmentDAO, WorkoutEquipmentVO } from '../../../configs';

export interface WorkoutEquipmentSnapshot {
  [key: string]: WorkoutEquipmentDAO;
}

export const mapWorkoutEquipmentSnapshotToVo = (
  snapshot: WorkoutEquipmentSnapshot
): WorkoutEquipmentVO[] => {
  return Object.keys(snapshot).map((key: string) => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      description: snapshot[key].description,
      iconId: snapshot[key].iconId,
      active: snapshot[key].active,
    };
  });
};
