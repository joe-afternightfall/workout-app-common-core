import { UserProfileDAO } from './UserProfileDAO';
import { UserHeight, UserWeight } from '../configs/interfaces/UserProfile';

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
    lastUpdatedOn: string
  ) {
    super(
      id,
      email,
      profileIcon,
      displayName,
      height,
      weights,
      dateOfBirth,
      lastUpdatedOn
    );
    this.firebaseId = firebaseId;
  }
}
