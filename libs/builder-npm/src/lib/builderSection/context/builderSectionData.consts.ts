import { IDraftData } from '@bob-types';
import { createContext } from 'react';
import { mockSectionData } from '../mockSectionData';
import { IBuilderSectionActionsContext } from './builderSectionData.types';

export const initialState: IDraftData = mockSectionData;
export const initialActions: IBuilderSectionActionsContext = {
  addComponent: () => '',
  deleteComponent: () => '',
  updateComponent: () => '',
};

export const BuilderSectionDataContext = createContext(initialState);
export const BuilderSectionActionsContext = createContext(initialActions);
