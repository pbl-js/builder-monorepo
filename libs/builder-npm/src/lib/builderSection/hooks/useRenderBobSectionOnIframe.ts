import {
  IDraftData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { useEffect } from 'react';

export const useRenderBobSectionOnIframe = (
  sectionName: string,
  sectionData: IDraftData
) => {
  useEffect(() => {
    const sectionDomData = document
      .querySelector(`#bob-section-${sectionName}`)
      ?.getBoundingClientRect();

    console.log(
      'PIŹDZISKO',
      document.querySelector(`#bob-section-${sectionName}`)
    );

    if (sectionDomData) {
      const newPostMessage: PostMessage_ToDashboard_RenderSection = {
        messageType: PostMessageType_ToDashboard.RENDER_SECTION,
        messageData: {
          ...sectionData,
          domData: sectionDomData,
        },
      };

      console.log('newpostmessage', newPostMessage);
      window.parent.postMessage(newPostMessage, '*');
    }
  }, [sectionName]);
};
