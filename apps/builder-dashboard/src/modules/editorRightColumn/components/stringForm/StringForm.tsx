import { TextInput } from '../../../../components/atoms/TextInput';
import { useEffect, useState } from 'react';
import {
  DraftComponent_DataItem_String,
  IDraftComponentData,
  PostMessageType_FromDashboard,
  PostMessage_FromDashboard_AddComponent,
  PostMessage_FromDashboard_UpdateComponent,
  Strapi_DraftComponent_DataItem,
} from '@bob-types';
import { useUpdateComponent_Api } from '../../../editorPage/utils/queries/component/hooks';
import { convertManyInputs_toStrapi } from '../../../editorPage/utils/queries/component/converter';

interface Props {
  propData: DraftComponent_DataItem_String;
  componentData: IDraftComponentData;
}

export const StringForm = ({ propData, componentData }: Props) => {
  const { name, valueString } = propData;
  const [value, setValue] = useState(valueString);
  const updateComponent = useUpdateComponent_Api();

  useEffect(() => {
    setValue(valueString);
  }, [valueString]);

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
    setValue(e.target.value);
    // TODO: Ogarnij te post message do jednego folderu
    window.frames[0].postMessage(newPostMessage, '*');
  };
  console.log('dupa:', componentData);
  const onBlur = (e: any) => {
    const restInputs = componentData.inputs.filter(
      ({ name }) => name !== propData.name
    );
    const convertedRestInputs = convertManyInputs_toStrapi(restInputs);

    const siema = updateComponent({
      variables: {
        id: '6',
        data: {
          componentType: componentData.componentType,
          jsxName: componentData.jsxName,
          layerName: componentData.layerName,
          parentId: componentData.parentId,
          styles: componentData.styles,
          inputs: [
            ...convertedRestInputs,
            {
              ...propData,
              __typename: 'ComponentPropsStringProp',
              valueString: value,
            },
          ],
        },
      },
    });

    console.log('Return from updateComponent', siema);
  };

  return (
    <TextInput
      label={name}
      value={value}
      onChange={(e) => onChange(e)}
      onBlur={(e) => onBlur(e)}
    />
  );
};
