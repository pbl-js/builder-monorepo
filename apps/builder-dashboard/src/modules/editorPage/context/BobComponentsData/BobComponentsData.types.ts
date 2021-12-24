import { ComponentRectData, ICustomComponent, IDraftData } from '@bob-types';

export interface IBobComponentsDataContext {
  customComponents: ICustomComponent[];
  activeDraft: IDraftData | null;
  componentsDomData: ComponentRectData[];
}
