import { GripTypeDAO, GripTypeVO } from '../../../configs';

export interface GripTypeSnapshot {
  [key: string]: GripTypeDAO;
}

export const mapGripTypeSnapshotToVO = (
  snapshot: GripTypeSnapshot
): GripTypeVO[] => {
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
