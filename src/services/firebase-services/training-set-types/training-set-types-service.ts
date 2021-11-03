import {
  TrainingSetTypeVO,
  FIREBASE_DB_TRAINING_SET_TYPES_ROUTE,
} from '../../../configs';
import firebase from 'firebase';
import { mapTrainingSetTypeSnapshotToVO } from '../../../utils';

export const getAllTrainingSetTypes = async (): Promise<
  TrainingSetTypeVO[]
> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_TRAINING_SET_TYPES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapTrainingSetTypeSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveTrainingSetTypes = async (): Promise<
  TrainingSetTypeVO[]
> => {
  const allTrainingSetTypes = await getAllTrainingSetTypes();
  const activeTrainingSetTypes: TrainingSetTypeVO[] = [];
  allTrainingSetTypes.map((trainingSetType: TrainingSetTypeVO) => {
    if (trainingSetType.active) {
      activeTrainingSetTypes.push(trainingSetType);
    }
  });
  return activeTrainingSetTypes;
};

export const getAllDeActivatedTrainingSetTypes = async (): Promise<
  TrainingSetTypeVO[]
> => {
  const allTrainingSetTypes = await getAllTrainingSetTypes();
  const deActivatedTrainingSetTypes: TrainingSetTypeVO[] = [];
  allTrainingSetTypes.map((trainingSetType: TrainingSetTypeVO) => {
    if (!trainingSetType.active) {
      deActivatedTrainingSetTypes.push(trainingSetType);
    }
  });
  return deActivatedTrainingSetTypes;
};
