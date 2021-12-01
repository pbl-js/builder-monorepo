import { RenderComponentsType } from '../../utils/renderComponents/types';
import { ComponentOrder } from '../types';
import styles from './builderWrapperComponent.module.css';

const BuilderWrapperComponent: React.FC<{
  component: ComponentOrder;
  renderComponents: RenderComponentsType;
}> = ({ component: { style, components }, renderComponents }) => {
  const bgc = style?.backgroundColor;

  return (
    <div className={styles['main-wrapper']} style={{ backgroundColor: bgc }}>
      {/* <RenderComponents components={components} /> */}
      {renderComponents(components)}
    </div>
  );
};

export default BuilderWrapperComponent;
