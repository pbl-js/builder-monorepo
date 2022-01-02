import {
  ComponentRectData,
  ICustomComponent_ApiPayload,
  IDraftData,
} from '@bob-types';

export interface IBobComponentsDataContext {
  customComponents: ICustomComponent_ApiPayload[];
  activeDraft: IDraftData | null;
  componentsDomData: ComponentRectData[];
}
