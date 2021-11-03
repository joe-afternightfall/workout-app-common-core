import { RoutineTemplateDAO, RoutineTemplateVO } from '../../../configs';

export interface RoutineTemplateSnapshot {
  [key: string]: RoutineTemplateDAO;
}
export const mapRoutineTemplateSnapshotToVO = (
  snapshot: RoutineTemplateSnapshot
): RoutineTemplateVO[] => {
  return Object.keys(snapshot).map((key: string): RoutineTemplateVO => {
    return {
      firebaseId: key,
      id: snapshot[key].id,
      name: snapshot[key].name,
      workoutCategoryId: snapshot[key].workoutCategoryId,
      phases: snapshot[key].phases,
      active: snapshot[key].active,
    };
  });
};
