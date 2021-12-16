import { ComponentOrder } from '@bob-typess';

export type RenderComponentsType = (
  components: ComponentOrder[]
) => JSX.Element[];
