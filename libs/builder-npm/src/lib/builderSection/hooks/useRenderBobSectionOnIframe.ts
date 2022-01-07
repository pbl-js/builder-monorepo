import {
  IDraftData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { useEffect } from 'react';
import { useBuilderSectionData } from '../context/builderSectionData.context';

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
  const {
    state: { draft },
  } = useBuilderSectionData();

  useEffect(() => {
    sendPostMessage(ref, draft);

    window.addEventListener('scroll', () => sendPostMessage(ref, draft));

    window.addEventListener('resize', () => sendPostMessage(ref, draft));
  }, [ref, draft]);
};
