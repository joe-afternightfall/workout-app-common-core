import { SideOfBody } from './SideOfBody';
import { BodySection } from './BodySection';
import { Muscles } from './Muscles';

export interface MuscleGroup {
  id: string;
  sideOfBody: SideOfBody;
  bodySection: BodySection;
  name: Muscles;
}
