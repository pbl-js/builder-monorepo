import { BobRect, IDraftComponentData } from './types';

export type CurrentParrentType = 'section' | number;

export interface RenderComponentsProps {
  components: IDraftComponentData[];
  currentParrent: CurrentParrentType;
}

export type RenderComponentsType = (
  props: RenderComponentsProps
) => JSX.Element[];

export type ComponentRectData = {
  componentId: number;
  domData: BobRect;
};

// Map props from api structure to component structure
export type BobComponentProps = {
  [key: string]: string | number;
};
