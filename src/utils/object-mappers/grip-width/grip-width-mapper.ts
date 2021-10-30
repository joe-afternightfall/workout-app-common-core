import { GripWidthDAO, GripWidthVO } from '../../../configs';

export interface GripWidthSnapshot {
  [key: string]: GripWidthDAO;
}

export const mapGripWidthSnapshotToVO = (
  snapshot: GripWidthSnapshot
): GripWidthVO[] => {
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
