import { createContext } from 'react';
import { IBobComponentsDataContext } from './BobComponentsData.types';

export const bobComponentsDataContextInitialState: IBobComponentsDataContext = {
  customComponents: [],
  activeDraft: null,
};

export const BobComponentsDataContext = createContext(
  bobComponentsDataContextInitialState
);
