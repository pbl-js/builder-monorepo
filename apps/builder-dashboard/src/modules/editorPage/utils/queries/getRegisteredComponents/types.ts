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
    style: ComponentStyles;
    inputs: {
      inputs: DraftComponent_DataItem[];
    };
  };
}

export interface RegisteredComponent_MutationVars {
  data: {
    // TODO: Add styles to mutation
    name: string;
    style: ComponentStyles;
    inputs: {
      inputs: DraftComponent_DataItem[];
    };
  };
}

export interface CreateRegisteredComponent {
  data: RegisteredComponent;
}
