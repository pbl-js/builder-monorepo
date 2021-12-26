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
  const { name, value } = propData;
  // const [value, setValue] = useState(initialValue);

  // useEffect(() => setValue(initialValue), [initialValue]);

  const onChange = (e: any) => {
    const newPropData: DraftComponent_DataItem_String = {
      ...propData,
      value: e.target.value,
    };

    const restComponentData_data = componentData.data.filter(
      ({ name }) => name !== propData.name
    );

    const newPostMessage: PostMessage_FromDashboard_UpdateComponent = {
      messageType: PostMessageType_FromDashboard.UPDATE_COMPONENT,
      messageData: {
        componentData: {
          ...componentData,
          data: [...restComponentData_data, newPropData],
        },
      },
    };

    // TODO: Ogarnij te post message do jednego folderu
    window.frames[0].postMessage(newPostMessage, '*');
  };

  return <TextInput label={name} value={value} onChange={(e) => onChange(e)} />;
};
