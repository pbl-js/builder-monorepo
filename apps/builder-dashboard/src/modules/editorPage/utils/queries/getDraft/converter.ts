import { IDraftData, StrapiDraftDataResponse } from '@bob-types';

export const convertGetDraft = (data: StrapiDraftDataResponse): IDraftData => {
  const convertedDraft: IDraftData = {
    id: data.draft.data.id,
    name: data.draft.data.attributes.name,
    components: data.draft.data.attributes.content.components,
  };

  return convertedDraft;
};
