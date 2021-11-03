import firebase from 'firebase';
import { mapGripWidthSnapshotToVO } from '../../../utils';
import { FIREBASE_DB_GRIP_WIDTHS_ROUTE, GripWidthVO } from '../../../configs';

export const getAllGripWidths = async (): Promise<GripWidthVO[]> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_GRIP_WIDTHS_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapGripWidthSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveGripWidths = async (): Promise<GripWidthVO[]> => {
  const allGripWidths = await getAllGripWidths();
  const activeGripWidths: GripWidthVO[] = [];
  allGripWidths.map((gripWidth: GripWidthVO) => {
    if (gripWidth.active) {
      activeGripWidths.push(gripWidth);
    }
  });
  return activeGripWidths;
};

export const getAllDeActivatedGripWidths = async (): Promise<GripWidthVO[]> => {
  const allGripWidths = await getAllGripWidths();
  const deActivatedGripWidths: GripWidthVO[] = [];
  allGripWidths.map((gripWidth: GripWidthVO) => {
    if (!gripWidth.active) {
      deActivatedGripWidths.push(gripWidth);
    }
  });
  return deActivatedGripWidths;
};
