import { UserHeight, UserWeight, Workout } from '../../interfaces/UserProfile';

export class UserProfileDAO {
  id: string;
  email: string;
  displayName: string;
  profileIcon: string;
  height: UserHeight;
  weights: UserWeight[];
  dateOfBirth: string;
  lastUpdatedOn: string;
  workouts: Workout[];

  constructor(
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
    this.id = id;
    this.email = email;
    this.profileIcon = profileIcon;
    this.displayName = displayName;
    this.weights = weights;
    this.height = height;
    this.dateOfBirth = dateOfBirth;
    this.lastUpdatedOn = lastUpdatedOn;
    this.workouts = workouts;
  }
}
