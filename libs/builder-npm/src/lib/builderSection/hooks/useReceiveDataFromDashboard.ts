import {
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard,
  PostMessage_FromDashboard_AddComponent,
} from '@bob-types';
import { useEffect } from 'react';

export const useAddReciveMessageListener = () => {
  useEffect(() => {
    const receiveMessage = (event: MessageEvent<PostMessage_FromDashboard>) => {
      if (
        event.data.messageType === PostMessageType_FromDashboard.ADD_COMPONENT
      ) {
        const data =
          event.data as unknown as PostMessage_FromDashboard_AddComponent;
      }
    };

    window.addEventListener('message', receiveMessage, false);
  }, []);
};
