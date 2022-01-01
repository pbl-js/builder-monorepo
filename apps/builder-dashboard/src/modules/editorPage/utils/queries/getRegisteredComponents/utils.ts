import {
  DraftComponent_DataItem,
  isNumberProp,
  isStringProp,
} from '@bob-types';
import {
  PropDataEnum,
  RegisteredComponent_MutationData_PropData,
  RegisteredComponent_Mutation_PropData_Number,
  RegisteredComponent_Mutation_PropData_String,
} from './types';

export function parseRegisteredComponentProps(
  props: DraftComponent_DataItem[]
): RegisteredComponent_MutationData_PropData[] {
  const parsedProps: RegisteredComponent_MutationData_PropData[] = [];

  props.forEach((item) => {
    if (isStringProp(item)) {
      const propString: RegisteredComponent_Mutation_PropData_String = {
        __typename: PropDataEnum.STRING,
        ...item,
      };

      return parsedProps.push(propString);
    }

    if (isNumberProp(item)) {
      const propNumber: RegisteredComponent_Mutation_PropData_Number = {
        __typename: PropDataEnum.NUMBER,
        ...item,
      };

      return parsedProps.push(propNumber);
    }
  });

  return parsedProps;
}
