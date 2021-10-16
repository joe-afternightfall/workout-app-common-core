import { Set } from '../../configs';

export const isCircuitSet = (id: string): boolean => {
  return id === '5b3ba1b6-92a9-489b-a51a-2ac0afdb99ca';
};

export const isSuperset = (id: string): boolean => {
  return id === '3fd3c30c-6c6a-4cfd-8e59-5b500e486374';
};

export const isStraightSet = (id: string): boolean => {
  return id === '40ac0220-8032-4860-81dd-68943d786123';
};

export const determineTrainingSetType = (
  id: string
): 'superset' | 'straight-set' | 'circuit-set' | null => {
  if (isStraightSet(id)) {
    return 'straight-set';
  }
  if (isCircuitSet(id)) {
    return 'circuit-set';
  }
  if (isSuperset(id)) {
    return 'superset';
  }
  return null;
};

export const isWeightsAndReps = (id: string): boolean => {
  return id === '769d3b23-31dd-4a16-b1d4-79e57ac305e9';
};

export const isRepsOnly = (id: string): boolean => {
  return id === '5046e288-3dd6-4da7-81e7-677798400b3b';
};

export const isDuration = (id: string): boolean => {
  return id === '2dfbe410-5d1c-4449-a3e9-b29f6ebec693';
};

export interface SetInfo {
  setNumber: number;
  weight: number;
  reps: number;
}

export const buildRepsAndSets = (sets: Set[]): string => {
  const setInfo: SetInfo[] = [];
  let builtInfo = '';

  sets.map((set: Set) => {
    setInfo.push({
      setNumber: set.setNumber,
      weight: set.weight,
      reps: set.reps,
    });
  });

  const sortedSets = setInfo.sort((a, b) => a.setNumber - b.setNumber);

  sortedSets.map((set: SetInfo) => {
    if (set.setNumber === 1) {
      if (set.weight === 0) {
        return (builtInfo = `${set.reps} reps`);
      } else {
        return (builtInfo = `${set.weight} x ${set.reps}`);
      }
    } else {
      if (set.weight === 0) {
        return (builtInfo += ` | ${set.reps} reps`);
      } else {
        return (builtInfo += ` | ${set.weight} x ${set.reps}`);
      }
    }
  });

  return builtInfo;
};
