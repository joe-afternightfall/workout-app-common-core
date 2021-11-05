import {
  ParameterTypeVO,
  FIREBASE_DB_PARAMETER_TYPES_ROUTE,
} from '../../../configs';
import firebase from 'firebase/app';
import 'firebase/database';
import { mapParameterTypeSnapshotToVO } from '../../../utils';

export const getAllParameterTypes = async (): Promise<ParameterTypeVO[]> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_PARAMETER_TYPES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapParameterTypeSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActiveParameterTypes = async (): Promise<
  ParameterTypeVO[]
> => {
  const allParameterTypes = await getAllParameterTypes();
  const activeParameterTypes: ParameterTypeVO[] = [];
  allParameterTypes.map((parameterType: ParameterTypeVO) => {
    if (parameterType.active) {
      activeParameterTypes.push(parameterType);
    }
  });
  return activeParameterTypes;
};

export const getAllDeActivatedParameterTypes = async (): Promise<
  ParameterTypeVO[]
> => {
  const allParameterTypes = await getAllParameterTypes();
  const deActivatedParameterTypes: ParameterTypeVO[] = [];
  allParameterTypes.map((parameterType: ParameterTypeVO) => {
    if (parameterType.active) {
      deActivatedParameterTypes.push(parameterType);
    }
  });
  return deActivatedParameterTypes;
};
