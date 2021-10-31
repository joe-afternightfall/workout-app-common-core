import {
  WorkoutCategoryVO,
  FIREBASE_DB_WORKOUT_CATEGORIES_ROUTE,
} from '../../../configs';
import firebase from 'firebase';
import { mapWorkoutCategorySnapshotToVO } from '../../../utils';

export const getAllWorkoutCategories = async (): Promise<
  WorkoutCategoryVO[]
> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_WORKOUT_CATEGORIES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapWorkoutCategorySnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveWorkoutCategories = async (): Promise<
  WorkoutCategoryVO[]
> => {
  const allWorkoutCategories = await getAllWorkoutCategories();
  const activeWorkoutCategories: WorkoutCategoryVO[] = [];
  allWorkoutCategories.map((workoutCategory: WorkoutCategoryVO) => {
    if (workoutCategory.active) {
      activeWorkoutCategories.push(workoutCategory);
    }
  });
  return activeWorkoutCategories;
};

export const getAllDeActivatedWorkoutCategories = async (): Promise<
  WorkoutCategoryVO[]
> => {
  const allWorkoutCategories = await getAllWorkoutCategories();
  const deActivatedWorkoutCategories: WorkoutCategoryVO[] = [];
  allWorkoutCategories.map((workoutCategory: WorkoutCategoryVO) => {
    if (!workoutCategory.active) {
      deActivatedWorkoutCategories.push(workoutCategory);
    }
  });
  return deActivatedWorkoutCategories;
};
