import {
  Set,
  Phase,
  Segment,
  WorkoutExercise,
} from '../../configs/interfaces/ActiveWorkout';

export const sortEntireRoutine = (phases: Phase[]): Phase[] => {
  const phasesCopy: Phase[] = phases;
  phasesCopy &&
    phasesCopy
      .sort((a: Phase, b: Phase) => a.order - b.order)
      .map((phase: Phase) => {
        phase.segments
          .sort((c: Segment, d: Segment) => c.order - d.order)
          .map((segment: Segment) => {
            segment.exercises
              .sort(
                (e: WorkoutExercise, f: WorkoutExercise) => e.order - f.order
              )
              .map((exercise: WorkoutExercise) => {
                exercise.sets.sort(
                  (g: Set, h: Set) => g.setNumber - h.setNumber
                );
              });
          });
      });

  return phasesCopy;
};
