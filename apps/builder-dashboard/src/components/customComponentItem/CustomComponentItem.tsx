import {
  ComponentType,
  ICustomComponent,
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard_AddComponent,
} from '@bob-types';
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

  const onDragStart = (e: DraggableEvent, data: DraggableData) => {
    setState((prev) => ({ ...prev, isDragging: true }));
  };

  const onStop = (e: DraggableEvent, data: DraggableData) => {
    setState((prev) => ({ ...prev, isDragging: false }));

    const newPostMessage: PostMessage_FromDashboard_AddComponent = {
      messageType: PostMessageType_FromDashboard.ADD_COMPONENT,
      messageData: {
        componentData: {
          id: 44,
          componentType: ComponentType.CUSTOM,
          jsxName: 'DEV-product-tile',
          layerName: 'test',
          parentId: 'section',
          data: {
            text: 'Pierwszy dodany przez panel',
            price: 919,
          },
          style: {},
        },
      },
    };
    console.log('dashboard-wiadomość-do-wysyłki', newPostMessage);
    window.frames[0].postMessage(newPostMessage, '*');
  };

  return (
    <Draggable onStart={onDragStart} onStop={onStop}>
      <MainWrapper id={createCustomComponentSelector(name)}>
        {name}fsd
      </MainWrapper>
    </Draggable>
  );
};
