import { PostMessageType, RenderSectionPostMessage } from '@bob-types';
import { useEffect } from 'react';

export const useRenderBobSectionOnIframe = (name: string) => {
  useEffect(() => {
    const sectionDomData = document
      .querySelector(`#bob-section-${name}`)
      ?.getBoundingClientRect();

    if (sectionDomData) {
      const newPostMessage: RenderSectionPostMessage = {
        messageType: PostMessageType.RENDER_SECTION,
        messageData: {
          name,
          domData: sectionDomData,
        },
      };

      window.parent.postMessage(newPostMessage, '*');
    }
  }, [name]);
};
