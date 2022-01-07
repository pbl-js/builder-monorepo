import {
  CurrentParrentType,
  IDraftComponentData,
  RenderComponentsType,
} from '@bob-typess';
import styles from './builderWrapperComponent.module.css';

const BuilderWrapperComponent: React.FC<{
  component: IDraftComponentData;
  parentId: CurrentParrentType;
  renderComponents: RenderComponentsType;
}> = ({ component, parentId, renderComponents }) => {
  const { style } = component;
  const bgc = style?.backgroundColor;

  return (
    <div className={styles['main-wrapper']} style={{ backgroundColor: bgc }}>
      {/* <RenderComponents components={components} /> */}
      {/* {renderComponents({ components, currentParrent: parentId })} */}
    </div>
  );
};

export default BuilderWrapperComponent;
