import styles from './builderSection.module.css';
import { mockSectionData } from './mockSectionData';
import { renderComponents } from '../utils/renderComponents/renderComponents';
import { BuilderSectionProps } from './builderSection.types';

export function BuilderSection({ name }: BuilderSectionProps) {
  const data = mockSectionData;

  return (
    <div className={styles['main-wrapper']}>
      {/* <h1>Welcome to BuilderSection!</h1> */}
      {renderComponents(data)}
    </div>
  );
}
