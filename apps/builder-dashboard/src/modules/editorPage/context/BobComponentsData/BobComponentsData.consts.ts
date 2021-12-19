import { createContext } from 'react';
import { IBobComponentsDataContext } from './BobComponentsData.types';

export const initialState: IBobComponentsDataContext = {
  customComponents: [],
  sections: [],
};

export const BobComponentsDataContext = createContext(initialState);
