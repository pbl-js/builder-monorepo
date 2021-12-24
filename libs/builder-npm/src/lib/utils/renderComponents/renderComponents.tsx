import { BuilderTextComponent } from '../../builderComponents/textComponent/builderTextComponent';
import {
  ComponentOrder,
  ComponentType,
  IDraftComponentData,
  RenderComponentsProps,
} from '@bob-typess';
import BuilderWrapperComponent from '../../builderComponents/wrapperComponent/builderWrapperComponent';
import { BOB } from '../bob';
import { BuilderComponentCustom } from '../../builderComponents/customComponent/BuilderComponentCustom';

export const renderComponents = ({
  components,
  currentParrent,
}: RenderComponentsProps) => {
  const matchingComponents = components.filter(
    ({ parentId }) => parentId === currentParrent
  );

  const componentsToRender = matchingComponents.map((component) => {
    if (component.componentType === ComponentType.CUSTOM) {
      console.log(component);
      return <BuilderComponentCustom componentData={component} />;
    }
  });

  return componentsToRender && componentsToRender.map((component) => component);
};
