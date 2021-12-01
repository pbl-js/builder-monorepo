import { ComponentOrder } from '../../builderComponents/types';

export type RenderComponentsType = (
  components: ComponentOrder[]
) => JSX.Element[];
