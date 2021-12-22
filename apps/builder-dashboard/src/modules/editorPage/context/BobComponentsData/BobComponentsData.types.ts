import { ICustomComponent, IDraftData } from '@bob-types';

export interface IBobComponentsDataContext {
  customComponents: ICustomComponent[];
  activeDraft: IDraftData | null;
}
