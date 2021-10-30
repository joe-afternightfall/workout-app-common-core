export class GripTypeDAO {
  id: string;
  name: string;
  description: string;
  iconId: string;
  active: boolean;

  constructor(
    id: string,
    name: string,
    description: string,
    iconId: string,
    active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.iconId = iconId;
    this.active = active;
  }
}
