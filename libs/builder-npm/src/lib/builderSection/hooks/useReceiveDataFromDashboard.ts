import {
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard,
  PostMessage_FromDashboard_AddComponent,
} from '@bob-types';
import { useEffect } from 'react';
import { useBuilderSectionData } from '../context/builderSectionData.hooks';
import { BuilderSectionDataActionKindEnum } from '../context/builderSectionData.types';

export const useAddReciveMessageListener = () => {
  // const dispatch = useBuilderSectionActions();
  const { dispatch } = useBuilderSectionData();

  useEffect(() => {
    const receiveMessage = (event: MessageEvent<PostMessage_FromDashboard>) => {
      const { messageType } = event.data;

      if (messageType === PostMessageType_FromDashboard.ADD_COMPONENT) {
        const {
          messageData: { componentData },
        } = event.data as unknown as PostMessage_FromDashboard_AddComponent;

        dispatch({
          type: BuilderSectionDataActionKindEnum.ADD_COMPONENT,
          payload: { componentData },
        });
      }
    };

    window.addEventListener('message', receiveMessage, false);
  }, [dispatch]);
};
