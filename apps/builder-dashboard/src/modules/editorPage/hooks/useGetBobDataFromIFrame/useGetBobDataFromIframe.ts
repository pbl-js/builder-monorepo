import { PostMessage, PostMessageType } from '@bob-types';
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
          console.log('siemanko');
        }
      };
      window.addEventListener('message', receiveMessage, false);
    }
  }, []);

  return { state, setState };
};
