import { EquipmentDAO, EquipmentVO } from '../../../configs';

export interface EquipmentSnapshot {
  [key: string]: EquipmentDAO;
}

export const mapEquipmentSnapshotToVo = (
  snapshot: EquipmentSnapshot
): EquipmentVO[] => {
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
