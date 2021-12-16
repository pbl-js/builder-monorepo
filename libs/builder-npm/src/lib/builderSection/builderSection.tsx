import styles from './builderSection.module.css';
import { mockSectionData } from './mockSectionData';
import { renderComponents } from '../utils/renderComponents/renderComponents';
import { BuilderSectionProps } from './builderSection.types';
import { useRenderBobSectionOnIframe } from './hooks/useRenderBobSectionOnIframe';

export function BuilderSection({ name }: BuilderSectionProps) {
  const data = mockSectionData;
  useRenderBobSectionOnIframe(name);

  return (
    <div id={`bob-section-${name}`} className={styles['main-wrapper']}>
      {/* <h1>Welcome to BuilderSection!</h1> */}
      {renderComponents(data)}
    </div>
  );
}
