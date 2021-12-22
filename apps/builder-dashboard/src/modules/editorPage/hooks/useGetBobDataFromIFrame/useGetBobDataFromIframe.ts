import {
  PostMessage_ToDashboard,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_Registercomponent,
  PostMessage_ToDashboard_RenderSection,
  IDraftComponentData,
} from '@bob-types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IBobComponentsDataContext } from '../../context/BobComponentsData/BobComponentsData.types';

export const useGetBobDataFromIframe = (): {
  state: IBobComponentsDataContext;
  setState: Dispatch<SetStateAction<IBobComponentsDataContext>>;
} => {
  const [state, setState] = useState<IBobComponentsDataContext>({
    customComponents: [],
    activeDraft: null,
  });

  console.log('zawartość contextu', state);

  useEffect(() => {
    if (process.browser) {
      const receiveMessage = (event: MessageEvent<PostMessage_ToDashboard>) => {
        console.log(event.data.messageType);
        if (
          event.data.messageType ===
          PostMessageType_ToDashboard.REGISTER_COMPONENT
        ) {
          const data =
            event.data as unknown as PostMessage_ToDashboard_Registercomponent;

          setState((prevState) => {
            const newCustomComponents = prevState.customComponents.map(
              (item) => item
            );

            return {
              ...prevState,
              customComponents: [...newCustomComponents, data.messageData],
            };
          });
        }

        if (
          event.data.messageType === PostMessageType_ToDashboard.RENDER_SECTION
        ) {
          const data =
            event.data as unknown as PostMessage_ToDashboard_RenderSection;

          setState((prevState) => {
            return {
              ...prevState,
              activeDraft: data.messageData,
            };
          });
        }

        if (
          event.data.messageType ===
          PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA
        ) {
          const { id, domData } = event.data.messageData;
          const componentToUpdate = state.activeDraft?.components.find(
            (component) => component.id === id
          );

          setState((prevState) => {
            if (componentToUpdate && domData && prevState.activeDraft) {
              const updatedComponent: IDraftComponentData = domData && {
                ...componentToUpdate,
                domData,
              };

              const updatedComponents: IDraftComponentData[] = [
                ...prevState.activeDraft?.components,
                updatedComponent,
              ];

              return {
                ...prevState,
                activeDraft: {
                  ...prevState.activeDraft,
                  components: updatedComponents,
                },
              };
            }
            return prevState;
          });
        }
      };
      window.addEventListener('message', receiveMessage, false);
    }
  }, []);

  return { state, setState };
};
