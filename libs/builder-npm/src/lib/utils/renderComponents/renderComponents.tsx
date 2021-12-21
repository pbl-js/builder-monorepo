import { BuilderTextComponent } from '../../builderComponents/textComponent/builderTextComponent';
import {
  ComponentOrder,
  ComponentType,
  IDraftComponentData,
} from '@bob-typess';
import BuilderWrapperComponent from '../../builderComponents/wrapperComponent/builderWrapperComponent';
import { BOB } from '../bob';
import { BuilderComponentCustom } from '../../builderComponents/customComponent/BuilderComponentCustom';

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
