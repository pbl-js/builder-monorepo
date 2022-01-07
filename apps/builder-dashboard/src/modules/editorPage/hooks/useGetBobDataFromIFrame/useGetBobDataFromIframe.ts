import {
  PostMessage_ToDashboard,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_Registercomponents,
  PostMessage_ToDashboard_RenderSection,
} from '@bob-types';
import { useEffect } from 'react';
import {
  useCreateRegisterComponent,
  useRegisteredComponents_API,
} from '../../utils/queries/getRegisteredComponents/hooks';
import { PropDataEnum } from '../../utils/queries/getRegisteredComponents/types';

export const useGetBobDataFromIframe = () => {
  const { data: registeredComponentsData } = useRegisteredComponents_API();
  const { createRegisterComponent, data, error, loading } =
    useCreateRegisterComponent();
  console.log(JSON.stringify(error, null, 2));

  useEffect(() => {
    if (process.browser && registeredComponentsData) {
      const receiveMessage = (event: MessageEvent<PostMessage_ToDashboard>) => {
        if (
          event.data.messageType ===
          PostMessageType_ToDashboard.REGISTER_COMPONENTS
        ) {
          const data =
            event.data as unknown as PostMessage_ToDashboard_Registercomponents;
          console.log('eloszka', data);
          const incomingComponentName = data.messageData.name;
          const existedComponent = registeredComponentsData.find(
            ({ name }) => name === incomingComponentName
          );

          if (existedComponent) {
            return;
          }
          const {
            messageData: { data: props, name, style },
          } = data;

          console.log('eloszka', props, name, style);
          // const siema = createRegisterComponent({ data: props, name, style });
          createRegisterComponent();
        }

        if (
          event.data.messageType === PostMessageType_ToDashboard.RENDER_SECTION
        ) {
          const data =
            event.data as unknown as PostMessage_ToDashboard_RenderSection;

          // setState((prevState) => {
          //   return {
          //     ...prevState,
          //     activeDraft: data.messageData,
          //   };
          // });
        }

        if (
          event.data.messageType ===
          PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA
        ) {
          const incomingComponent = event.data.messageData;

          // setState((prevState) => {
          //   const restComponents = prevState.componentsDomData.filter(
          //     ({ componentId }) => componentId !== incomingComponent.componentId
          //   );

          //   return {
          //     ...prevState,
          //     componentsDomData: [...restComponents, incomingComponent],
          //   };
          // });
        }
      };

      window.addEventListener('message', receiveMessage, false);
    }
  }, [registeredComponentsData, createRegisterComponent]);
};
