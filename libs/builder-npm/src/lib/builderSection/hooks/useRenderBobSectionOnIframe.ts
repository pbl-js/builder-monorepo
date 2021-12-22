import {
  IDraftData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { useEffect } from 'react';
import { useBuilderSectionData } from '../context/builderSectionData.hooks';

const sendPostMessage = (
  ref: React.MutableRefObject<HTMLDivElement | null>,
  sectionData: IDraftData
) => {
  const sectionDomData = ref.current?.getBoundingClientRect();

  const newPostMessage: PostMessage_ToDashboard_RenderSection = {
    messageType: PostMessageType_ToDashboard.RENDER_SECTION,
    messageData: {
      ...sectionData,
      domData: sectionDomData,
    },
  };

  return window.parent.postMessage(newPostMessage, '*');
};

export const useRenderBobSectionOnIframe = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const { sectionData } = useBuilderSectionData();

  useEffect(() => {
    sendPostMessage(ref, sectionData);

    window.addEventListener('scroll', () => sendPostMessage(ref, sectionData));

    window.addEventListener('resize', () => sendPostMessage(ref, sectionData));
  }, [ref, sectionData]);
};
