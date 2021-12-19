import { BuilderTextComponent } from '../../builderComponents/text/builderTextComponent';
import {
  ComponentOrder,
  ComponentType,
  IDraftComponentData,
} from '@bob-typess';
import BuilderWrapperComponent from '../../builderComponents/wrapper/builderWrapperComponent';
import { BOB } from '../bob';
import { BuilderComponentCustom } from '../../builderComponents/custom/BuilderComponentCustom';

type CurrentParrentType = 'section' | number;

export const renderComponents = (
  components: IDraftComponentData[],
  currentParrent: CurrentParrentType
) => {
  const matchingComponents = components.filter(
    ({ parentId }) => parentId === currentParrent
  );

  const componentsToRender = matchingComponents.map((component) => {
    if (component.componentType === ComponentType.CUSTOM) {
      return <BuilderComponentCustom componentData={component} />;
    }
  });

  return componentsToRender && componentsToRender.map((component) => component);
};
