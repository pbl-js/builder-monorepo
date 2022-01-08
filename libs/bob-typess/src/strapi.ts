import { IDraftComponentData } from './types';

export type StrapiComponentData = Omit<IDraftComponentData, 'id' | 'domData'>;

export type StrapiDraftData = {
  id: string;
  attributes: {
    name: string;
    components: {
      data: {
        id: string;
        attributes: StrapiComponentData;
      }[];
    };
  };
};

export type StrapiDraftsDataResponse = {
  drafts: {
    data: StrapiDraftData[];
  };
};

export type StrapiDraftDataResponse = {
  draft: {
    data: StrapiDraftData;
  };
};
