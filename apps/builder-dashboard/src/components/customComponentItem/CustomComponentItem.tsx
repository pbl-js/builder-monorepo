import { ICustomComponent } from '@bob-types';
import { MainWrapper } from './customComponentItem.style';
import Draggable, { DraggableData, DraggableEvent } from 'react-draggable';

const createCustomComponentSelector = (name: string) =>
  `#custom-component-button-${name}`;

interface Props {
  customComponent: ICustomComponent;
}

export const CustomComponentItem = (props: Props): JSX.Element => {
  const {
    customComponent: { name },
  } = props;

  const onDragStart = (e: DraggableEvent, data: DraggableData) => {
    console.log(console.log(data));
  };

  return (
    <Draggable onStart={onDragStart} onDrag={onDragStart}>
      <MainWrapper id={createCustomComponentSelector(name)}>
        {name}fsd
      </MainWrapper>
    </Draggable>
  );
};
