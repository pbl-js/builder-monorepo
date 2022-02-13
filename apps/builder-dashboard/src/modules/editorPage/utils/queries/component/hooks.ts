import { ApolloError, useMutation } from '@apollo/client';
import {
  IDraftComponentData,
  StrapiUpdateComponentDataResponse,
  StrapiUpdateComponentDataVariables,
} from '@bob-types';
import { useMemo } from 'react';
import { convertUpdateComponent } from './converter';
// import { convertGetDraft } from './converter';
import { UPDATE_COMPONENT } from './query';

// interface UseDraft_API_ReturnType {}

type UseDraft_API_ReturnType = [
  () => void,
  {
    data: IDraftComponentData | undefined | null;
    loading: boolean;
    error: ApolloError | undefined;
  }
];

export const useUpdateComponent_Api = () => {
  const [updateComponent, { data, loading, error }] = useMutation<
    StrapiUpdateComponentDataResponse,
    StrapiUpdateComponentDataVariables
  >(UPDATE_COMPONENT);
  console.log(data);

  const convertedData = useMemo(
    () => data && convertUpdateComponent(data),
    [data]
  );

  return updateComponent;
};
