import { Dispatch, SetStateAction } from 'react';

export interface IGlobalUiDataContext {
  isDragging: boolean;
  activeComponents: number[];
  setState: Dispatch<SetStateAction<IGlobalUiDataContext>>;
}
