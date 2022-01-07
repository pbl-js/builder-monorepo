import {
  IDraftData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_Registercomponents,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { useEffect } from 'react';
import { BOB } from '../../utils/bob';
import { useBuilderSectionData } from '../context/builderSectionData.context';

const postMessage_renderSection = (
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

function postMessage_registerComponents() {
  const registeredComponents = BOB._customComponents;

  const convertRegisteredComponentsToSend = registeredComponents.map(
    ({ name, data, style }) => ({ name, data, style })
  );

  const newPostMessage: PostMessage_ToDashboard_Registercomponents = {
    messageType: PostMessageType_ToDashboard.REGISTER_COMPONENTS,
    messageData: {
      registeredComponents: convertRegisteredComponentsToSend,
    },
  };

  // setTimeout(() => {
  window.parent.postMessage(newPostMessage, '*');
  // }, 1000);
}

export const useRenderBobSectionOnIframe = (
  ref: React.MutableRefObject<HTMLDivElement | null>
) => {
  const {
    state: { draft, isComunicationOpen },
  } = useBuilderSectionData();

  useEffect(() => {
    if (isComunicationOpen) {
      postMessage_registerComponents();
    }
  }, [isComunicationOpen]);

  useEffect(() => {
    postMessage_renderSection(ref, draft);

    window.addEventListener('scroll', () =>
      postMessage_renderSection(ref, draft)
    );

    window.addEventListener('resize', () =>
      postMessage_renderSection(ref, draft)
    );
  }, [ref, draft]);
};
