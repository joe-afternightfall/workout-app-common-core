import firebase from 'firebase/app';
import 'firebase/database';
import { mapGripTypeSnapshotToVO } from '../../../utils';
import { GripTypeVO, FIREBASE_DB_GRIP_TYPES_ROUTE } from '../../../configs';

export const getAllGripTypes = async (): Promise<GripTypeVO[]> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_GRIP_TYPES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapGripTypeSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveGripTypes = async (): Promise<GripTypeVO[]> => {
  const allGripTypes = await getAllGripTypes();
  const activeGripTypes: GripTypeVO[] = [];
  allGripTypes.map((gripType: GripTypeVO) => {
    if (gripType.active) {
      activeGripTypes.push(gripType);
    }
  });
  return activeGripTypes;
};

export const getAllDeActivatedGripTypes = async (): Promise<GripTypeVO[]> => {
  const allGripTypes = await getAllGripTypes();
  const deActivatedGripTypes: GripTypeVO[] = [];
  allGripTypes.map((gripType: GripTypeVO) => {
    if (!gripType.active) {
      deActivatedGripTypes.push(gripType);
    }
  });
  return deActivatedGripTypes;
};
