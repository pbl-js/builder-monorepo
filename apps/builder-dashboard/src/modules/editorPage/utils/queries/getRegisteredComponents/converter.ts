import { ICustomComponent } from '@bob-types';
import { GetRegisteredComponents } from './types';

export const convertGetRegisteredComponents = (
  data: GetRegisteredComponents
): ICustomComponent[] => {
  const registeredComponents = data.registeredComponents.data;
  const convertedComponents: ICustomComponent[] = registeredComponents.map(
    ({ id, attributes }) => {
      const { props: data, ...rest } = attributes;

      return {
        id,
        data,
        ...rest,
      };
    }
  );

  return convertedComponents;
};
