import { Routine } from '../AppInterfaces';
import { MobileWorkoutDAO } from './MobileWorkoutDAO';

export class MobileWorkoutVO extends MobileWorkoutDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    userId: string,
    date: string,
    startTime: string,
    endTime: string,
    routine: Routine
  ) {
    super(id, userId, date, startTime, endTime, routine);
    this.firebaseId = firebaseId;
  }
}
