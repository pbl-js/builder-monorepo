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
  PropDataEnum,
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

export const useCreateRegisterComponent = () => {
  const [createRegisterComponent, { data, loading, error }] = useMutation<
    {
      createRegisterComponents: CreateRegisteredComponent;
    },
    RegisteredComponent_MutationVars
  >(CREATE_REGISTERED_COMPONENTS, {
    variables: {
      data: {
        name: 'ddsd',
        props: [
          {
            __typename: 'ComponentPropPropString',
            name: 'text',
            valueString: 'elo',
          },
        ],
      },
    },
  });

  function createRegisterComponentWithParsedProps({
    name,
    style,
    data: props,
  }: Omit<ICustomComponent, 'jsxElement'>) {
    const parsedProps = parseRegisteredComponentProps(props);
    return () => {
      console.log('wykonuje', parsedProps);
      // createRegisterComponent({
      //   variables: {
      //     registeredComponent: { data: { name, props: parsedProps } },
      //   },
      // });
    };
  }

  return {
    createRegisterComponent,
    data,
    loading,
    error,
  };
};
