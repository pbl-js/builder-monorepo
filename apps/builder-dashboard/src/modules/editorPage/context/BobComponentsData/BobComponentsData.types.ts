import { ICustomComponent, IDraftData } from '@bob-types';

export interface IBobComponentsDataContext {
  customComponents: ICustomComponent[];
  sections: IDraftData[];
}
