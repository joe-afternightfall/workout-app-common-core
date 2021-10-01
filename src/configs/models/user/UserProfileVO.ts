import { UserProfileDAO } from './UserProfileDAO';
import { UserHeight, UserWeight, Workout } from '../../interfaces/UserProfile';

export class UserProfileVO extends UserProfileDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    email: string,
    profileIcon: string,
    displayName: string,
    height: UserHeight,
    weights: UserWeight[],
    dateOfBirth: string,
    lastUpdatedOn: string,
    workouts: Workout[]
  ) {
    super(
      id,
      email,
      profileIcon,
      displayName,
      height,
      weights,
      dateOfBirth,
      lastUpdatedOn,
      workouts
    );
    this.firebaseId = firebaseId;
  }
}
