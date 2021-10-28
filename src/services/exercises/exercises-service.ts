import firebase from 'firebase';
import { mapExerciseSnapshotToVO } from '../../utils';
import { ExerciseVO, FIREBASE_DB_EXERCISES_ROUTE } from '../../configs';

export const getAllExercises = async (): Promise<ExerciseVO[]> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_EXERCISES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapExerciseSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};
