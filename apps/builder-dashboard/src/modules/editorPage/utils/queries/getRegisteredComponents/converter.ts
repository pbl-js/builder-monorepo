import { ICustomComponent } from '@bob-types';
import { GetRegisteredComponents } from './types';

export const convertGetRegisteredComponents = (
  data: GetRegisteredComponents
): ICustomComponent[] => {
  const registeredComponents = data.registeredComponents.data;
  const convertedComponents: ICustomComponent[] = registeredComponents.map(
    ({ id, attributes }) => {
      const { inputs, ...rest } = attributes;

      return {
        id,
        inputs: inputs.inputs,
        ...rest,
      };
    }
  );

  return convertedComponents;
};
