import { GripTypeDAO } from './GripTypeDAO';

export class GripTypeVO extends GripTypeDAO {
  firebaseId: string;

  constructor(
    id: string,
    name: string,
    description: string,
    iconId: string,
    active: boolean,
    firebaseId: string
  ) {
    super(id, name, description, iconId, active);
    this.firebaseId = firebaseId;
  }
}
