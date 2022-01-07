import { ApolloError, gql, useMutation, useQuery } from '@apollo/client';
import { ICustomComponent } from '@bob-types';
import { useEffect } from 'react';
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
    { createRegisteredComponent: CreateRegisteredComponent },
    RegisteredComponent_MutationVars
  >(CREATE_REGISTERED_COMPONENTS, {
    update(cache, { data: updatedData }) {
      const registeredComponentsQuery =
        cache.readQuery<GetRegisteredComponents>({
          query: GET_REGISTERED_COMPONENTS,
        });

      if (registeredComponentsQuery && updatedData) {
        cache.writeQuery<GetRegisteredComponents>({
          query: GET_REGISTERED_COMPONENTS,
          data: {
            registeredComponents: {
              data: [
                ...registeredComponentsQuery.registeredComponents.data,
                updatedData.createRegisteredComponent.data,
              ],
            },
          },
        });
      }
    },
  });

  useEffect(() => {
    if (error) {
      console.log(JSON.stringify(error));
    }
  }, [error]);

  return createRegisterComponent;
};
