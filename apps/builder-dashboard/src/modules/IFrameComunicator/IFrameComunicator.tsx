import {
  PostMessageType_FromDashboard,
  PostMessageType_ToDashboard,
  PostMessage_FromDashboard_OpenComunication,
  PostMessage_FromDashboard_SetDraftData,
  PostMessage_ToDashboard,
  PostMessage_ToDashboard_Registercomponents,
  PostMessage_ToDashboard_RenderSection,
  PostMessage_ToDashboard_SendComponentDomData,
} from '@bob-types';
import React, { useEffect } from 'react';
import useEffectOnce from 'react-use/lib/useEffectOnce';
import { useComponentsRectData } from '../editorPage/context/ComponentsRectDataContext/ComponentsRectDataContext';
import { useGetBobDataFromIframe } from '../editorPage/hooks/useGetBobDataFromIFrame/useGetBobDataFromIframe';
import { UseDraft_API } from '../editorPage/utils/queries/getDraft/hooks';
import {
  useCreateRegisterComponent,
  useRegisteredComponents_API,
} from '../editorPage/utils/queries/getRegisteredComponents/hooks';
import { parseRegisteredComponentProps } from '../editorPage/utils/queries/getRegisteredComponents/utils';

export const IFrameComunicator = () => {
  const { data: registeredComponentsData } = useRegisteredComponents_API();
  const { data: draftData } = UseDraft_API(1);

  const isReady =
    registeredComponentsData !== undefined && draftData !== undefined;

  const createRegisterComponent = useCreateRegisterComponent();
  const { dispatch } = useComponentsRectData();

  useEffect(() => {
    if (isReady) {
      const newPostMessage: PostMessage_FromDashboard_OpenComunication = {
        messageType: PostMessageType_FromDashboard.OPEN_COMUNICATION,
      };

      // TODO: Add isIframeReady function instead of timeout
      setTimeout(() => {
        window.frames[0].postMessage(newPostMessage, '*');
      }, 500);
    }
  }, [isReady]);

  useEffect(() => {
    if (isReady) {
      const newPostMessage: PostMessage_FromDashboard_SetDraftData = {
        messageType: PostMessageType_FromDashboard.SET_DRAFT_DATA,
        messageData: {
          draftData,
        },
      };

      // TODO: Add isIframeReady function instead of timeout
      setTimeout(() => {
        window.frames[0].postMessage(newPostMessage, '*');
      }, 500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isReady]);

  useEffect(() => {
    if (isReady) {
      const receiveMessage = (event: MessageEvent<PostMessage_ToDashboard>) => {
        if (
          event.data.messageType ===
          PostMessageType_ToDashboard.REGISTER_COMPONENTS
        ) {
          const data =
            event.data as unknown as PostMessage_ToDashboard_Registercomponents;

          const incomingComponents = data.messageData.registeredComponents;
          const existedComponents = registeredComponentsData;
          const unregisteredComponents = incomingComponents.filter(
            ({ name: incomingName }) => {
              const matchComponent = existedComponents.find(
                ({ name }) => name === incomingName
              );
              if (matchComponent) {
                return false;
              }
              return true;
            }
          );
          // TODO: Handle updateRegisteredComponent
          unregisteredComponents.forEach(async ({ name, data }) => {
            await createRegisterComponent({
              variables: {
                data: {
                  name: name,
                  props: parseRegisteredComponentProps(data),
                },
              },
            });
          });
        }
        if (
          event.data.messageType === PostMessageType_ToDashboard.RENDER_SECTION
        ) {
          const data =
            event.data as unknown as PostMessage_ToDashboard_RenderSection;
          const { sectionId, domData } = data.messageData;
          dispatch({
            type: 'add-section-data',
            payload: { sectionId, domData },
          });
        }
        if (
          event.data.messageType ===
          PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA
        ) {
          const data =
            event.data as unknown as PostMessage_ToDashboard_SendComponentDomData;
          const { componentId, domData } = data.messageData;
          dispatch({
            type: 'add-component-data',
            payload: { componentId, domData },
          });
        }
      };

      window.addEventListener('message', receiveMessage, false);
    }
  }, [isReady]);

  return null;
};
