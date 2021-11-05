import firebase from 'firebase/app';
import 'firebase/database';
import { mapMuscleSnapshotToVO } from '../../../utils';
import { FIREBASE_DB_MUSCLES_ROUTE, MuscleVO } from '../../../configs';

export const getAllMuscles = async (): Promise<MuscleVO[]> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_MUSCLES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapMuscleSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveMuscles = async (): Promise<MuscleVO[]> => {
  const allMuscles = await getAllMuscles();
  const activeMuscles: MuscleVO[] = [];
  allMuscles.map((muscle: MuscleVO) => {
    if (muscle.active) {
      activeMuscles.push(muscle);
    }
  });
  return activeMuscles;
};

export const getAllDeActivatedMuscles = async (): Promise<MuscleVO[]> => {
  const allMuscles = await getAllMuscles();
  const deActivatedMuscles: MuscleVO[] = [];
  allMuscles.map((muscle: MuscleVO) => {
    if (!muscle.active) {
      deActivatedMuscles.push(muscle);
    }
  });
  return deActivatedMuscles;
};
