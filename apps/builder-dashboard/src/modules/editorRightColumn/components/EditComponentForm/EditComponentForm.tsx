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
      {bobCustomDomponent.data.map((inputData) => {
        switch (inputData.type) {
          case 'string':
            return (
              <StringForm
                name={inputData.name}
                defaultValue={inputData.defaultValue}
              />
            );

          default:
            break;
        }
      })}
    </div>
  );
};
