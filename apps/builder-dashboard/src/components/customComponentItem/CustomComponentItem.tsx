import { ICustomComponent } from '@bob-types';
import { MainWrapper } from './customComponentItem.style';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';
import { useGlobalUiDataState } from '../../modules/editorPage/context/GlobalUiData/GlobalUiData.hooks';

const createCustomComponentSelector = (name: string) =>
  `#custom-component-button-${name}`;

interface Props {
  customComponent: ICustomComponent;
}

export const CustomComponentItem = (props: Props): JSX.Element => {
  const {
    customComponent: { name },
  } = props;

  const { setState } = useGlobalUiDataState();
  console.log(setState);

  const onDragStart = (e: DraggableEvent, data: DraggableData) => {
    console.log(console.log(data));
    setState((prev) => ({ ...prev, isDragging: true }));
  };

  const onStop = (e: DraggableEvent, data: DraggableData) => {
    setState((prev) => ({ ...prev, isDragging: false }));
  };

  return (
    <Draggable onStart={onDragStart} onStop={onStop}>
      <MainWrapper id={createCustomComponentSelector(name)}>
        {name}fsd
      </MainWrapper>
    </Draggable>
  );
};
