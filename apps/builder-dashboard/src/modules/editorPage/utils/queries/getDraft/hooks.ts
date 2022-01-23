import { ApolloError, useQuery } from '@apollo/client';
import {
  IDraftData,
  StrapiDraftDataResponse,
  StrapiDraftDataVariables,
} from '@bob-types';
import { useMemo } from 'react';
import { convertGetDraft } from './converter';
import { GET_DRAFT } from './query';

interface UseDraft_API_ReturnType {
  data: IDraftData | undefined;
  loading: boolean;
  error: ApolloError | undefined;
}

export const UseDraft_API = (id: number): UseDraft_API_ReturnType => {
  const { data, loading, error } = useQuery<
    StrapiDraftDataResponse,
    StrapiDraftDataVariables
  >(GET_DRAFT, { variables: { id } });

  const convertedData = useMemo(() => data && convertGetDraft(data), [data]);

  return { data: convertedData, loading, error };
};
