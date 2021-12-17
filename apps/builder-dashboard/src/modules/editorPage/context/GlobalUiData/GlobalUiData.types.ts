import { Dispatch, SetStateAction } from 'react';

export interface IGlobalUiDataContext {
  isDragging: boolean;
  setState: Dispatch<SetStateAction<IGlobalUiDataContext>>;
}
