import firebase from 'firebase';
import { FIREBASE_DB_PHASES_ROUTE, PhaseVO } from '../../../configs';
import { mapPhaseSnapshotToVO } from '../../../utils';

export const getAllPhases = async (): Promise<PhaseVO[]> => {
  return await firebase
    .database()
    .ref(FIREBASE_DB_PHASES_ROUTE)
    .once('value')
    .then((snapshot) => {
      if (snapshot.val()) {
        return mapPhaseSnapshotToVO(snapshot.val());
      } else {
        return [];
      }
    });
};

export const getAllActivePhases = async (): Promise<PhaseVO[]> => {
  const allPhases = await getAllPhases();
  const activePhases: PhaseVO[] = [];
  allPhases.map((phase: PhaseVO) => {
    if (phase.active) {
      activePhases.push(phase);
    }
  });
  return activePhases;
};

export const getAllDeActivatedPhases = async (): Promise<PhaseVO[]> => {
  const allPhases = await getAllPhases();
  const deActivatedPhases: PhaseVO[] = [];
  allPhases.map((phase: PhaseVO) => {
    if (!phase.active) {
      deActivatedPhases.push(phase);
    }
  });
  return deActivatedPhases;
};
