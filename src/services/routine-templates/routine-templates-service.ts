import firebase from 'firebase';
import {
  FIREBASE_DB_ROUTINE_TEMPLATES_ROUTE,
  RoutineTemplateVO,
} from '../../configs';
import { mapRoutineSnapshotToVO } from '../../utils';

export const getAllRoutineTemplates = async (): Promise<
  RoutineTemplateVO[]
> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_ROUTINE_TEMPLATES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapRoutineSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};
