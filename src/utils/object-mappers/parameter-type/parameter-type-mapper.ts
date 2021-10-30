import { ParameterTypeDAO, ParameterTypeVO } from '../../../configs';

export interface ParameterTypeSnapshot {
  [key: string]: ParameterTypeDAO;
}

export const mapParameterTypeSnapshotToVO = (
  snapshot: ParameterTypeSnapshot
): ParameterTypeVO[] => {
  return Object.keys(snapshot).map((key: string) => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      description: snapshot[key].description,
      active: snapshot[key].active,
    };
  });
};
