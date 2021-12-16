import {
  PostMessage,
  PostMessageType,
  RegisterComponentPostMessage,
} from '@bob-types';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { IBobComponentsDataContext } from '../../context/BobComponentsData/BobComponentsData.types';

export const useGetBobDataFromIframe = (): {
  state: IBobComponentsDataContext;
  setState: Dispatch<SetStateAction<IBobComponentsDataContext>>;
} => {
  const [state, setState] = useState<IBobComponentsDataContext>({
    customComponents: [],
  });

  useEffect(() => {
    if (process.browser) {
      const receiveMessage = (event: MessageEvent<PostMessage>) => {
        if (event.data.messageType === PostMessageType.REGISTER_COMPONENT) {
          const data = event.data
            .messageData as unknown as RegisterComponentPostMessage;
          console.log(data);
        }
      };
      window.addEventListener('message', receiveMessage, false);
    }
  }, []);

  return { state, setState };
};
