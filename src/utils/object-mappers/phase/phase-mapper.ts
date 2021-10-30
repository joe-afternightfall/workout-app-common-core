import { PhaseDAO, PhaseVO } from '../../../configs';

export interface PhaseSnapshot {
  [key: string]: PhaseDAO;
}

export const mapPhaseSnapshotToVO = (snapshot: PhaseSnapshot): PhaseVO[] => {
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
