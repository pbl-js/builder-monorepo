import { ComponentOrder } from '@bob-types';

export type RenderComponentsType = (
  components: ComponentOrder[]
) => JSX.Element[];
