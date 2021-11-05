import {
  WorkoutEquipmentVO,
  FIREBASE_DB_WORKOUT_EQUIPMENT_ROUTE,
} from '../../../configs';
import firebase from 'firebase/app';
import 'firebase/database';
import { mapWorkoutEquipmentSnapshotToVo } from '../../../utils';

export const getAllWorkoutEquipment = async (): Promise<
  WorkoutEquipmentVO[]
> => {
  return firebase
    .database()
    .ref(FIREBASE_DB_WORKOUT_EQUIPMENT_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapWorkoutEquipmentSnapshotToVo(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveWorkoutEquipment = async (): Promise<
  WorkoutEquipmentVO[]
> => {
  const allWorkoutEquipment = await getAllWorkoutEquipment();
  const activeWorkoutEquipment: WorkoutEquipmentVO[] = [];
  allWorkoutEquipment.map((workoutEquipment: WorkoutEquipmentVO) => {
    if (workoutEquipment.active) {
      activeWorkoutEquipment.push(workoutEquipment);
    }
  });
  return activeWorkoutEquipment;
};

export const getAllDeActivatedWorkoutEquipment = async (): Promise<
  WorkoutEquipmentVO[]
> => {
  const allWorkoutEquipment = await getAllWorkoutEquipment();
  const deActivatedWorkoutEquipment: WorkoutEquipmentVO[] = [];
  allWorkoutEquipment.map((workoutEquipment: WorkoutEquipmentVO) => {
    if (!workoutEquipment.active) {
      deActivatedWorkoutEquipment.push(workoutEquipment);
    }
  });
  return deActivatedWorkoutEquipment;
};
