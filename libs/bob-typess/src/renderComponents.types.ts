import { IDraftComponentData } from './types';

export type CurrentParrentType = 'section' | number;

export interface RenderComponentsProps {
  components: IDraftComponentData[];
  currentParrent: CurrentParrentType;
}

export type RenderComponentsType = (
  props: RenderComponentsProps
) => JSX.Element[];
