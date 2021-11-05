import firebase from 'firebase/app';
import 'firebase/database';
import {
  FIREBASE_DB_MANIKIN_MUSCLE_GROUPS_ROUTE,
  ManikinMuscleGroupVO,
} from '../../../configs';
import { mapManikinMuscleGroupSnapshotToVO } from '../../../utils';

export const getAllManikinMuscleGroups = async (): Promise<
  ManikinMuscleGroupVO[]
> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_MANIKIN_MUSCLE_GROUPS_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapManikinMuscleGroupSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveManikinMuscleGroups = async (): Promise<
  ManikinMuscleGroupVO[]
> => {
  const allManikinMuscleGroups = await getAllManikinMuscleGroups();
  const activeManikinMuscleGroups: ManikinMuscleGroupVO[] = [];
  allManikinMuscleGroups.map((manikinMuscleGroup: ManikinMuscleGroupVO) => {
    if (manikinMuscleGroup.active) {
      activeManikinMuscleGroups.push(manikinMuscleGroup);
    }
  });
  return activeManikinMuscleGroups;
};

export const getAllDeActivatedManikinMuscleGroups = async (): Promise<
  ManikinMuscleGroupVO[]
> => {
  const allManikinMuscleGroups = await getAllManikinMuscleGroups();
  const deActivatedManikinMuscleGroups: ManikinMuscleGroupVO[] = [];
  allManikinMuscleGroups.map((manikinMuscleGroup: ManikinMuscleGroupVO) => {
    if (!manikinMuscleGroup.active) {
      deActivatedManikinMuscleGroups.push(manikinMuscleGroup);
    }
  });
  return deActivatedManikinMuscleGroups;
};
