import { PhaseVO, ParameterTypeVO, TrainingSetTypeVO } from '../../configs';

export const getParameterType = (
  allParamTypes: ParameterTypeVO[],
  id: string
): ParameterTypeVO | undefined => {
  return allParamTypes.find((type) => type.id === id);
};

export const getSetType = (
  allSetTypes: TrainingSetTypeVO[],
  id: string
): TrainingSetTypeVO | undefined => {
  return allSetTypes.find((set: TrainingSetTypeVO) => set.id === id);
};

export const getPhase = (
  allPhases: PhaseVO[],
  id: string
): PhaseVO | undefined => {
  return allPhases.find((phase: PhaseVO) => phase.id === id);
};
