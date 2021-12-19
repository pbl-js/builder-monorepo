import {
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { useEffect } from 'react';
import { useBuilderSectionData } from '../context/builderSectionData.hooks';

export const useRenderBobSectionOnIframe = () => {
  const { sectionData } = useBuilderSectionData();
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
  }, [sectionData, name]);
};
