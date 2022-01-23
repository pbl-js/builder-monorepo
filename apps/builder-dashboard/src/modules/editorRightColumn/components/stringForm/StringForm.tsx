import { TextInput } from '../../../../components/atoms/TextInput';
import { useEffect, useState } from 'react';
import {
  DraftComponent_DataItem_String,
  IDraftComponentData,
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard_AddComponent,
  PostMessage_FromDashboard_UpdateComponent,
} from '@bob-types';

interface Props {
  propData: DraftComponent_DataItem_String;
  componentData: IDraftComponentData;
}

export const StringForm = ({ propData, componentData }: Props) => {
  const { name, valueString } = propData;

  const onChange = (e: any) => {
    const newPropData: DraftComponent_DataItem_String = {
      ...propData,
      valueString: e.target.value,
    };

    const restComponentData_data = componentData.inputs.filter(
      ({ name }) => name !== propData.name
    );

    const newPostMessage: PostMessage_FromDashboard_UpdateComponent = {
      messageType: PostMessageType_FromDashboard.UPDATE_COMPONENT,
      messageData: {
        componentData: {
          ...componentData,
          inputs: [...restComponentData_data, newPropData],
        },
      },
    };

    // TODO: Ogarnij te post message do jednego folderu
    window.frames[0].postMessage(newPostMessage, '*');
  };

  return (
    <TextInput label={name} value={valueString} onChange={(e) => onChange(e)} />
  );
};
