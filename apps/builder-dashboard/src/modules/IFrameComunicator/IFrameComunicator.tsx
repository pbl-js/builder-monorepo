import {
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard_OpenComunication,
} from '@bob-types';
import React, { useEffect } from 'react';
import useEffectOnce from 'react-use/lib/useEffectOnce';
import { useGetBobDataFromIframe } from '../editorPage/hooks/useGetBobDataFromIFrame/useGetBobDataFromIframe';
import { useRegisteredComponents_API } from '../editorPage/utils/queries/getRegisteredComponents/hooks';

export const IFrameComunicator = () => {
  const { data: registeredComponentsData } = useRegisteredComponents_API();

  useEffect(() => {
    if (registeredComponentsData && registeredComponentsData.length > 0) {
      const newPostMessage: PostMessage_FromDashboard_OpenComunication = {
        messageType: PostMessageType_FromDashboard.OPEN_COMUNICATION,
      };
      console.log('postmessage się wysyła', newPostMessage);

      // TODO: Add isIframeReady function instead of timeout
      setTimeout(() => {
        window.frames[0].postMessage(newPostMessage, '*');
      }, 500);
    }
  }, [registeredComponentsData]);

  return null;
};
