import { ApolloError, useQuery } from '@apollo/client';
import { ICustomComponent } from '@bob-types';
import { convertGetRegisteredComponents } from './converter';
import { GET_REGISTERED_COMPONENTS } from './query';
import { GetRegisteredComponents } from './types';

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
