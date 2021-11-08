import { MusclesWorked } from '../../../interfaces';
import { ExtraInfo } from '../../../interfaces/exercise-settings/ExtraInfo';

export class ExerciseDAO {
  id: string;
  name: string;
  description: string;
  workoutEquipmentIds: string[];
  manikinMuscleGroupIds: string[];
  musclesWorked: MusclesWorked;
  iconId: string;
  gripTypeId: string;
  gripWidthId: string;
  parameterTypeId: string;
  alternateSides: boolean;
  active: boolean;
  extraInfo: ExtraInfo[];

  constructor(
    id: string,
    name: string,
    description: string,
    extraInfo: ExtraInfo[],
    workoutEquipmentIds: string[],
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
    this.extraInfo = extraInfo;
    this.workoutEquipmentIds = workoutEquipmentIds;
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
