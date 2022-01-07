import {
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard,
  PostMessage_FromDashboard_AddComponent,
  PostMessage_FromDashboard_OpenComunication,
} from '@bob-types';
import { useEffect } from 'react';
import { useBuilderSectionData } from '../context/builderSectionData.context';
import { BuilderSectionDataActionKindEnum } from '../context/builderSectionData.types';

export const useAddReciveMessageListener = () => {
  const { dispatch } = useBuilderSectionData();

  useEffect(() => {
    const receiveMessage = (event: MessageEvent<PostMessage_FromDashboard>) => {
      const { messageType } = event.data;

      if (messageType === PostMessageType_FromDashboard.OPEN_COMUNICATION) {
        dispatch({
          type: BuilderSectionDataActionKindEnum.OPEN_COMUNICATION,
        });
      }

      if (messageType === PostMessageType_FromDashboard.ADD_COMPONENT) {
        const {
          messageData: { componentData },
        } = event.data as unknown as PostMessage_FromDashboard_AddComponent;

        dispatch({
          type: BuilderSectionDataActionKindEnum.ADD_COMPONENT,
          payload: { componentData },
        });
      }

      if (messageType === PostMessageType_FromDashboard.UPDATE_COMPONENT) {
        const {
          messageData: { componentData },
        } = event.data as unknown as PostMessage_FromDashboard_AddComponent;

        dispatch({
          type: BuilderSectionDataActionKindEnum.UPDATE_COMPONENT,
          payload: { componentData },
        });
      }
    };

    window.addEventListener('message', receiveMessage, false);
  }, [dispatch]);
};
