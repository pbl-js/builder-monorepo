import {
  IDraftComponentData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_SendComponentDomData,
} from '@bob-types';
import { useEffect } from 'react';
import { COMPONENT_SELECTOR } from '../../consts';

export const useSendComponentDataToDashboard = (
  componentData: IDraftComponentData
) => {
  useEffect(() => {
    const componentDomData = document
      .querySelector(`${COMPONENT_SELECTOR}${componentData.id}`)
      ?.getBoundingClientRect();

    if (componentDomData) {
      const newPostMessage: PostMessage_ToDashboard_SendComponentDomData = {
        messageType: PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA,
        messageData: {
          ...componentData,
          domData: componentDomData,
        },
      };

      window.parent.postMessage(newPostMessage, '*');
    }
  }, [componentData]);
};
