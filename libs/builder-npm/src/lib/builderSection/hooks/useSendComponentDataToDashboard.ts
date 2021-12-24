import {
  BobRect,
  IDraftComponentData,
  PostMessageType_ToDashboard,
  PostMessage_ToDashboard_SendComponentDomData,
} from '@bob-types';
import { useEffect, useState } from 'react';
import { useBuilderSectionData } from '../context/builderSectionData.hooks';
import { BuilderSectionDataActionKindEnum } from '../context/builderSectionData.types';
import useMeasure, { UseMeasureRef } from 'react-use/lib/useMeasure';
import useEvent from 'react-use/lib/useEvent';
import useMount from 'react-use/lib/useMount';

export const useSendComponentDataToDashboard = (
  componentData: IDraftComponentData
): UseMeasureRef<HTMLDivElement> => {
  const [ref, refData] = useMeasure<HTMLDivElement>();

  console.log(refData);
  // useMount(updateRect);
  // useEvent('keydown', updateRect);

  useEffect(() => {
    if (refData) {
      const { top, bottom, left, right, x, y, width, height } = refData;
      const domData = { top, bottom, left, right, x, y, width, height };
      console.log(height);

      const newPostMessage: PostMessage_ToDashboard_SendComponentDomData = {
        messageType: PostMessageType_ToDashboard.SEND_COMPONENT_DOM_DATA,
        messageData: {
          componentId: componentData.id,
          domData: domData,
        },
      };

      window.parent.postMessage(newPostMessage, '*');
    }
  }, [refData, componentData.id]);

  return ref;
};
