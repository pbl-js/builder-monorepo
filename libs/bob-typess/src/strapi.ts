import { IDraftComponentData } from './types';

// TODO: Przerób section reducer tak żeby dom data dla kompomentów była oddzielnym stanem
export type StrapiComponentData = Omit<IDraftComponentData, 'domData'>;

export type StrapiDraftData = {
  id: string;
  attributes: {
    name: string;
    content: {
      components: StrapiComponentData[];
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

export type StrapiDraftDataVariables = {
  id: number;
};
