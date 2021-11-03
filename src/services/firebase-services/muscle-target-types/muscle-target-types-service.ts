import {
  MuscleTargetTypeVO,
  FIREBASE_DB_MUSCLE_TARGET_TYPES_ROUTE,
} from '../../../configs';
import firebase from 'firebase';
import { mapMuscleTargetTypeSnapshotToVO } from '../../../utils';

export const getAllMuscleTargetTypes = async (): Promise<
  MuscleTargetTypeVO[]
> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_MUSCLE_TARGET_TYPES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapMuscleTargetTypeSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveMuscleTargetTypes = async (): Promise<
  MuscleTargetTypeVO[]
> => {
  const allMuscleTargetTypes = await getAllMuscleTargetTypes();
  const activeMuscleTargetTypes: MuscleTargetTypeVO[] = [];
  allMuscleTargetTypes.map((muscleTargetType: MuscleTargetTypeVO) => {
    if (muscleTargetType.active) {
      activeMuscleTargetTypes.push(muscleTargetType);
    }
  });
  return activeMuscleTargetTypes;
};

export const getAllDeActivatedMuscleTargetTypes = async (): Promise<
  MuscleTargetTypeVO[]
> => {
  const allMuscleTargetTypes = await getAllMuscleTargetTypes();
  const deActivatedMuscleTargetTypes: MuscleTargetTypeVO[] = [];
  allMuscleTargetTypes.map((muscleTargetType: MuscleTargetTypeVO) => {
    if (!muscleTargetType.active) {
      deActivatedMuscleTargetTypes.push(muscleTargetType);
    }
  });
  return deActivatedMuscleTargetTypes;
};
