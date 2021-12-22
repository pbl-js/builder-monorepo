import {
  IDraftComponentData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_SendComponentDomData,
} from '@bob-types';
import { useEffect } from 'react';

export const useSendComponentDataToDashboard = (
  componentData: IDraftComponentData,
  ref: React.RefObject<HTMLDivElement>
) => {
  useEffect(() => {
    const domData = ref.current?.getBoundingClientRect();

    if (domData) {
      const newPostMessage: PostMessage_ToDashboard_SendComponentDomData = {
        messageType: PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA,
        messageData: {
          ...componentData,
          domData: domData,
        },
      };

      window.parent.postMessage(newPostMessage, '*');
    }
  }, [componentData, ref]);
};
