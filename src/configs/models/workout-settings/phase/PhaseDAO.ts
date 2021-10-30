export class PhaseDAO {
  id: string;
  name: string; // ex(warm ups | HIIT | strength training | cardio | interval training)
  description: string;
  active: boolean;

  constructor(id: string, name: string, description: string, active: boolean) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.active = active;
  }
}
