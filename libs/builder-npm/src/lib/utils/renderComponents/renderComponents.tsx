import { BuilderTextComponent } from '../../builderComponents/text/builderTextComponent';
import {
  ComponentOrder,
  ComponentType,
  IDraftComponentData,
} from '@bob-typess';
import BuilderWrapperComponent from '../../builderComponents/wrapper/builderWrapperComponent';
import { BOB } from '../bob';

type CurrentParrentType = 'section' | number;

export const renderComponents = (
  components: IDraftComponentData[],
  currentParrent: CurrentParrentType
) => {
  // const componetsToRender = components.map((component) => {
  //   if (component.componentType === ComponentType.WRAPPER)
  //     return (
  //       <BuilderWrapperComponent
  //         key={component.componentId}
  //         component={component}
  //         renderComponents={renderComponents}
  //       />
  //     );

  //   if (component.componentType === ComponentType.TEXT)
  //     return (
  //       <BuilderTextComponent
  //         key={component.componentId}
  //         component={component}
  //       />
  //     );

  //   if (component.componentType === ComponentType.CUSTOM) {
  //     const matchComponent = BOB._customComponents.find((({name}) => component.));

  //     return (
  //       <BuilderTextComponent
  //         key={component.componentId}
  //         component={component}
  //       />
  //     );
  //   }

  //   return (
  //     <BuilderTextComponent key={component.componentId} component={component} />
  //   );
  // });
  const matchingComponents = components.filter(
    ({ parentId }) => parentId === currentParrent
  );

  const componentsToRender = matchingComponents.map((component) => {
    if (component.componentType === ComponentType.CUSTOM) {
      const { jsxElement: Component } =
        BOB._customComponents.find(({ name }) => component.jsxName === name) ||
        {};

      const props = component.data;

      return Component && <Component {...props} />;
    }
  });

  return componentsToRender && componentsToRender.map((component) => component);
};
