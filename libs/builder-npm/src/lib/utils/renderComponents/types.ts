import { ComponentOrder } from '../../types/types';

export type RenderComponentsType = (
  components: ComponentOrder[]
) => JSX.Element[];
