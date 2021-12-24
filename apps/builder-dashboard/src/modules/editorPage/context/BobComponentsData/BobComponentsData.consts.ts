import { createContext } from 'react';
import { IBobComponentsDataContext } from './BobComponentsData.types';

export const bobComponentsDataContextInitialState: IBobComponentsDataContext = {
  customComponents: [],
  activeDraft: null,
  componentsDomData: [],
};

export const BobComponentsDataContext = createContext(
  bobComponentsDataContextInitialState
);
