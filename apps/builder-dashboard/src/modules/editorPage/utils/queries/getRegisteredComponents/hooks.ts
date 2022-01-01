import { ApolloError, useMutation, useQuery } from '@apollo/client';
import { ICustomComponent } from '@bob-types';
import { convertGetRegisteredComponents } from './converter';
import {
  CREATE_REGISTERED_COMPONENTS,
  GET_REGISTERED_COMPONENTS,
} from './query';
import {
  CreateRegisteredComponent,
  GetRegisteredComponents,
  RegisteredComponent_MutationVars,
} from './types';
import { parseRegisteredComponentProps } from './utils';

interface UseRegisteredComponents_API_ReturnType {
  data: ICustomComponent[] | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

export const useRegisteredComponents_API =
  (): UseRegisteredComponents_API_ReturnType => {
    const { data, loading, error } = useQuery<GetRegisteredComponents>(
      GET_REGISTERED_COMPONENTS
    );

    const convertedData = data && convertGetRegisteredComponents(data);

    return { data: convertedData, loading, error };
  };

export const useRegisterComponent_Mutation = (
  registeredComponent: Omit<ICustomComponent, 'id'>
) => {
  const { name, jsxElement, data: props } = registeredComponent;
  const parsedProps = parseRegisteredComponentProps(props);

  const [createRegisterComponent, { data, loading, error }] = useMutation<
    {
      createRegisterComponents: CreateRegisteredComponent;
    },
    { registeredComponent: RegisteredComponent_MutationVars }
  >(CREATE_REGISTERED_COMPONENTS, {
    variables: {
      registeredComponent: { data: { name, jsxElement, props: parsedProps } },
    },
  });

  return { createRegisterComponent, data, loading, error };
};
