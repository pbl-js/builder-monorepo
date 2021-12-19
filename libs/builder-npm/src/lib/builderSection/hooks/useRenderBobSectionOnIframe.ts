import {
  IDraftData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { useEffect } from 'react';

export const useRenderBobSectionOnIframe = (sectionData: IDraftData) => {
  const { name } = sectionData;
  useEffect(() => {
    const sectionDomData = document
      .querySelector(`#bob-section-${name}`)
      ?.getBoundingClientRect();

    if (sectionDomData) {
      const newPostMessage: PostMessage_ToDashboard_RenderSection = {
        messageType: PostMessageType_ToDashboard.RENDER_SECTION,
        messageData: {
          ...sectionData,
          domData: sectionDomData,
        },
      };

      window.parent.postMessage(newPostMessage, '*');
    }
  }, [name]);
};
