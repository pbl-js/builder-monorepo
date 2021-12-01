import { BuilderTextComponent } from '../../builderComponents/text/builderTextComponent';
import { ComponentOrder, ComponentType } from '../../builderComponents/types';
import BuilderWrapperComponent from '../../builderComponents/wrapper/builderWrapperComponent';

export const renderComponents = (components: ComponentOrder[]) => {
  const componetsToRender = components.map((component) => {
    if (component.componentType === ComponentType.WRAPPER)
      return (
        <BuilderWrapperComponent
          key={component.componentId}
          component={component}
          renderComponents={renderComponents}
        />
      );

    if (component.componentType === ComponentType.TEXT)
      return (
        <BuilderTextComponent
          key={component.componentId}
          component={component}
        />
      );

    return (
      <BuilderTextComponent key={component.componentId} component={component} />
    );
  });

  return componetsToRender && componetsToRender.map((component) => component);
};
