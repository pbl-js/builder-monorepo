import {
  ICustomComponent,
  IDraftComponentData,
  isStringProp,
} from '@bob-types';
import { StringForm } from '../stringForm/StringForm';

interface Props {
  componentData: IDraftComponentData;
  bobCustomDomponent: ICustomComponent;
}

export const EditComponentForm = ({
  componentData,
  bobCustomDomponent,
}: Props) => {
  return (
    <div>
      {componentData.inputs.map((inputData) => {
        if (isStringProp(inputData)) {
          return (
            <StringForm
              key={inputData.name}
              propData={inputData}
              componentData={componentData}
            />
          );
        }
      })}
    </div>
  );
};
