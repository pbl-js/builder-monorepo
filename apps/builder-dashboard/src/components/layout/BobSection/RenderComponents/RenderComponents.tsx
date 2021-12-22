import { CurrentParrentType, IDraftComponentData } from '@bob-types';
import React from 'react';
import { BobComponent } from '../BobComponent/BobComponent';

interface Props {
  components: IDraftComponentData[];
  // currentParrent: CurrentParrentType;
}

export const RenderComponents = ({ components }: Props): JSX.Element => {
  console.log(components);
  return (
    <>
      {components.map((component) => (
        <BobComponent key={component.id} componentData={component} />
      ))}
    </>
  );
};
