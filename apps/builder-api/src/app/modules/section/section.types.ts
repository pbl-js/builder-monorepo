import { IComponent } from '../component/component.types';
export interface ISection {
  id: number;
  name: string;
  destinationUrl: string;
  components?: IComponent[];
}
