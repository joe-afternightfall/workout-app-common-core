import { ParameterTypeDAO } from './ParameterTypeDAO';

export class ParameterTypeVO extends ParameterTypeDAO {
  firebaseId: string;

  constructor(
    firebaseId: string,
    id: string,
    name: string,
    description: string,
    active: boolean
  ) {
    super(id, name, description, active);
    this.firebaseId = firebaseId;
  }
}
