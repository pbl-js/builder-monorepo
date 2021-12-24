import { createContext } from 'react';
import { IGlobalUiDataContext } from './GlobalUiData.types';

export const globalUiDataInitialState: IGlobalUiDataContext = {
  isDragging: false,
  activeComponents: [],
  setState: () => '',
};

export const GlobalUiDataContext = createContext(globalUiDataInitialState);
