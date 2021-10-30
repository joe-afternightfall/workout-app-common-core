import { TrainingSetTypeDAO, TrainingSetTypeVO } from '../../../configs';

export interface TrainingSetTypeSnapshot {
  [key: string]: TrainingSetTypeDAO;
}

export const mapTrainingSetTypeSnapshotToVO = (
  snapshot: TrainingSetTypeSnapshot
): TrainingSetTypeVO[] => {
  return Object.keys(snapshot).map((key: string) => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      description: snapshot[key].description,
      iconId: snapshot[key].iconId,
      active: snapshot[key].active,
    };
  });
};
