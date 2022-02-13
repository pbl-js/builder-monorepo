import { Dispatch, SetStateAction } from 'react';

export interface IGlobalUiDataContext {
  isDragging: boolean;
  activeComponents: string[];
  setState: Dispatch<SetStateAction<IGlobalUiDataContext>>;
}
