import firebase from 'firebase/app';
import 'firebase/database';
import { mapExerciseSnapshotToVO } from '../../../utils';
import { ExerciseVO, FIREBASE_DB_EXERCISES_ROUTE } from '../../../configs';

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

export const getAllActiveExercises = async (): Promise<ExerciseVO[]> => {
  const allExercises = await getAllExercises();
  const activeExercises: ExerciseVO[] = [];
  allExercises.map((exercise: ExerciseVO) => {
    if (exercise.active) {
      activeExercises.push(exercise);
    }
  });
  return activeExercises;
};

export const getAllDeActivatedExercises = async (): Promise<ExerciseVO[]> => {
  const allExercises = await getAllExercises();
  const deActivatedExercises: ExerciseVO[] = [];
  allExercises.map((exercise: ExerciseVO) => {
    if (!exercise.active) {
      deActivatedExercises.push(exercise);
    }
  });
  return deActivatedExercises;
};
