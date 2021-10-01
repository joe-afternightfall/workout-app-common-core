import { Routine } from '../interfaces/ActiveWorkout';

export class MobileWorkoutDAO {
  id: string;
  userId: string;
  date: string;
  startTime: string;
  endTime: string;
  routine: Routine;

  constructor(
    id: string,
    userId: string,
    date: string,
    startTime: string,
    endTime: string,
    routine: Routine
  ) {
    this.id = id;
    this.userId = userId;
    this.date = date;
    this.startTime = startTime;
    this.endTime = endTime;
    this.routine = routine;
  }
}
