import firebase from 'firebase';
import {
  RoutineTemplateVO,
  FIREBASE_DB_ROUTINE_TEMPLATES_ROUTE,
} from '../../../configs';
import { mapRoutineTemplateSnapshotToVO } from '../../../utils';

export const getAllRoutineTemplates = async (): Promise<
  RoutineTemplateVO[]
> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_ROUTINE_TEMPLATES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapRoutineTemplateSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveRoutineTemplates = async (): Promise<
  RoutineTemplateVO[]
> => {
  const allRoutineTemplates = await getAllRoutineTemplates();
  const activeRoutineTemplates: RoutineTemplateVO[] = [];
  allRoutineTemplates.map((routineTemplate: RoutineTemplateVO) => {
    if (routineTemplate.active) {
      activeRoutineTemplates.push(routineTemplate);
    }
  });
  return activeRoutineTemplates;
};

export const getAllDeActivatedRoutineTemplates = async (): Promise<
  RoutineTemplateVO[]
> => {
  const allRoutineTemplates = await getAllRoutineTemplates();
  const deActivatedRoutineTemplates: RoutineTemplateVO[] = [];
  allRoutineTemplates.map((routineTemplate: RoutineTemplateVO) => {
    if (!routineTemplate.active) {
      deActivatedRoutineTemplates.push(routineTemplate);
    }
  });
  return deActivatedRoutineTemplates;
};
