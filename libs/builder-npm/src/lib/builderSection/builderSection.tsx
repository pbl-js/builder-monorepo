import styles from './builder-npm.module.css';
import {
  ComponentOrder,
  componentOrderType,
  ComponentType,
  mockSectionData,
} from './mockSectionData';

/* eslint-disable-next-line */
export interface BuilderSectionProps {
  name: string;
}

const BuilderWrapperComponent: React.FC<{ component: ComponentOrder }> = ({
  component: { style, components },
}) => {
  const bgc = style?.backgroundColor;
  console.log('WRAPPER_COMPONENT');
  return (
    <div
      className={styles['builder-wrapper-component']}
      style={{ backgroundColor: bgc }}
    >
      {/* <RenderComponents components={components} /> */}
      {renderComponents(components)}
    </div>
  );
};

const BuilderTextComponent: React.FC<{ component: ComponentOrder }> = ({
  component: { style },
}) => {
  console.log('object');
  return <p style={style}>cfg</p>;
};

const renderComponents = (components: ComponentOrder[]) => {
  const componetsToRender = components.map((component) => {
    if (component.componentType === ComponentType.WRAPPER)
      return (
        <BuilderWrapperComponent
          key={component.componentId}
          component={component}
        />
      );

    if (component.componentType === ComponentType.TEXT)
      return (
        <BuilderTextComponent
          key={component.componentId}
          component={component}
        />
      );
  });

  return componetsToRender && componetsToRender.map((component) => component);
};

export function BuilderSection({ name }: BuilderSectionProps) {
  const data = mockSectionData;

  return (
    <div className={styles['main-wrapper']}>
      {/* <h1>Welcome to BuilderSection!</h1> */}
      {/* <RenderComponents components={data} /> */}
      {renderComponents(data)}
    </div>
  );
}
