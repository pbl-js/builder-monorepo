import { ICustomComponent, IDraftComponentData } from '@bob-types';
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
      {componentData.data.map((inputData) => {
        if (inputData.type === 'string') {
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
