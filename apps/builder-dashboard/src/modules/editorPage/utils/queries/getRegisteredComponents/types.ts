import {
  ComponentStyles,
  DraftComponent_DataItem,
  DraftComponent_DataItem_Number,
  DraftComponent_DataItem_String,
} from '@bob-types';

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

export enum PropDataEnum {
  STRING = 'ComponentPropPropString',
  NUMBER = 'ComponentPropPropNumber',
}

export interface RegisteredComponent_Mutation_PropData_String
  extends DraftComponent_DataItem_String {
  __typename: PropDataEnum.STRING;
}

export interface RegisteredComponent_Mutation_PropData_Number
  extends DraftComponent_DataItem_Number {
  __typename: PropDataEnum.NUMBER;
}

export type RegisteredComponent_MutationData_PropData =
  | RegisteredComponent_Mutation_PropData_String
  | RegisteredComponent_Mutation_PropData_Number;

export interface RegisteredComponent_MutationVars {
  data: {
    // TODO: Add styles to mutation
    name: string;
    props: RegisteredComponent_MutationData_PropData[];
  };
}

export interface CreateRegisteredComponent {
  createRegisteredComponent: {
    data: RegisteredComponent[];
  };
}
