import {
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard,
  PostMessage_FromDashboard_AddComponent,
} from '@bob-types';
import { useEffect } from 'react';
import { useBuilderSectionActions } from '../context/builderSectionData.hooks';

export const useAddReciveMessageListener = () => {
  const { addComponent } = useBuilderSectionActions();

  useEffect(() => {
    const receiveMessage = (event: MessageEvent<PostMessage_FromDashboard>) => {
      const { messageType } = event.data;

      if (messageType === PostMessageType_FromDashboard.ADD_COMPONENT) {
        const {
          messageData: { componentData },
        } = event.data as unknown as PostMessage_FromDashboard_AddComponent;

        addComponent({ componentData });
      }
    };

    window.addEventListener('message', receiveMessage, false);
  }, []);
};
