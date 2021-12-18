import { IDraftData } from '@bob-types';
import { createContext } from 'react';
import { mockSectionData } from '../mockSectionData';

export const initialState: IDraftData = mockSectionData;

export const BuilderSectionDataContext = createContext(initialState);
