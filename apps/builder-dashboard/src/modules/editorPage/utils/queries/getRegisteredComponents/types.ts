import { ComponentStyles, DraftComponent_DataItem } from '@bob-types';

export interface GetRegisteredComponents {
  registeredComponents: {
    data: RegisteredComponent[];
  };
}

export interface RegisteredComponent {
  id: string;
  attributes: {
    name: string;
    jsxElement: string;
    style: ComponentStyles;
    props: DraftComponent_DataItem[];
  };
}
