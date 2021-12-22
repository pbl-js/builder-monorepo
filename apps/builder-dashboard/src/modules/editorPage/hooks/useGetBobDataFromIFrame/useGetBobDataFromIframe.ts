import {
  PostMessage_ToDashboard,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_Registercomponent,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IBobComponentsDataContext } from '../../context/BobComponentsData/BobComponentsData.types';

export const useGetBobDataFromIframe = (): {
  state: IBobComponentsDataContext;
  setState: Dispatch<SetStateAction<IBobComponentsDataContext>>;
} => {
  const [state, setState] = useState<IBobComponentsDataContext>({
    customComponents: [],
    sections: [],
  });

  console.log('zawartość contextu', state);

  useEffect(() => {
    if (process.browser) {
      const receiveMessage = (event: MessageEvent<PostMessage_ToDashboard>) => {
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
            const newSections = prevState.sections.map((section) => section);

            return {
              ...prevState,
              sections: [...newSections, data.messageData],
            };
          });
        }

        if (
          event.data.messageType ===
          PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA
        ) {
          // const data = event.data.messageData.;
          // setState((prevState) => {
          //   const prevComponents = prevState.
          //   return {
          //     ...prevState,
          //     sections: [...newSections, data.messageData],
          //   };
          // });
        }
      };
      window.addEventListener('message', receiveMessage, false);
    }
  }, []);

  return { state, setState };
};
