export interface MusclesWorked {
  primary: { muscleTargetTypeId: string; muscleId: string }[];
  secondary: { muscleTargetTypeId: string; muscleId: string }[];
}

export class ExerciseDAO {
  id: string;
  name: string;
  description: string;
  equipmentIds: string[];
  manikinMuscleGroupIds: string[];
  musclesWorked: MusclesWorked;
  iconId: string;
  gripTypeId: string;
  gripWidthId: string;
  parameterTypeId: string;
  alternateSides: boolean;
  active: boolean;

  constructor(
    id: string,
    name: string,
    description: string,
    equipmentIds: string[],
    manikinMuscleGroupIds: string[],
    musclesWorked: MusclesWorked,
    iconId: string,
    gripTypeId: string,
    gripWidthId: string,
    parameterTypeId: string,
    alternateSides: boolean,
    active: boolean
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.equipmentIds = equipmentIds;
    this.manikinMuscleGroupIds = manikinMuscleGroupIds;
    this.musclesWorked = musclesWorked;
    this.iconId = iconId;
    this.gripTypeId = gripTypeId;
    this.gripWidthId = gripWidthId;
    this.parameterTypeId = parameterTypeId;
    this.alternateSides = alternateSides;
    this.active = active;
  }
}
