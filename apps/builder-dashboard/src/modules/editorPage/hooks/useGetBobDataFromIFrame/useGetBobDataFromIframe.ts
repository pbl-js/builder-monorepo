import {
  PostMessage,
  PostMessageType,
  RegisterComponentPostMessage,
  RenderSectionPostMessage,
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
      const receiveMessage = (event: MessageEvent<PostMessage>) => {
        if (event.data.messageType === PostMessageType.REGISTER_COMPONENT) {
          const data = event.data as unknown as RegisterComponentPostMessage;

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

        if (event.data.messageType === PostMessageType.RENDER_SECTION) {
          const data = event.data as unknown as RenderSectionPostMessage;

          setState((prevState) => {
            const newSections = prevState.sections.map((section) => section);

            return {
              ...prevState,
              sections: [...newSections, data.messageData],
            };
          });
        }
      };
      window.addEventListener('message', receiveMessage, false);
    }
  }, []);

  return { state, setState };
};
