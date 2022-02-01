import {
  DraftComponent_DataItem_Number,
  DraftComponent_DataItem_String,
  IDraftComponentData,
} from './types';

export interface Strapi_DraftComponent_DataItem_String
  extends DraftComponent_DataItem_String {
  __typename: 'ComponentPropsStringProp';
  id: number;
}

export interface Strapi_DraftComponent_DataItem_Number
  extends DraftComponent_DataItem_Number {
  __typename: 'ComponentPropsNumberProp';
  id: number;
}

export type Strapi_DraftComponent_DataItem =
  | Strapi_DraftComponent_DataItem_String
  | Strapi_DraftComponent_DataItem_Number;

// TODO: Przerób section reducer tak żeby dom data dla kompomentów była oddzielnym stanem
export interface StrapiComponentData
  extends Omit<IDraftComponentData, 'domData'> {
  inputs: Strapi_DraftComponent_DataItem[];
}

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

export type StrapiDraftDataVariables = {
  id: number;
};
