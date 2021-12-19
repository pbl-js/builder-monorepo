import { createContext } from 'react';
import { mockSectionData } from '../mockSectionData';
import { IBuilderSectionDataContext } from './builderSectionData.types';

export const initialState: IBuilderSectionDataContext = {
  sectionData: mockSectionData,
  dispatch: () => null,
};

export const BuilderSectionDataContext = createContext(initialState);
