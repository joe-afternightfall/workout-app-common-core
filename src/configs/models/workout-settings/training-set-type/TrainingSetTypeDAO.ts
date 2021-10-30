export class TrainingSetTypeDAO {
  id: string;
  name: string; // ex(superset | straight set | circuit | pyramid | drop set | giant set (triples or quadruples))
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
