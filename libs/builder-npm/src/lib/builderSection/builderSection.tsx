import styles from './builderSection.module.css';
import { mockSectionData } from './mockSectionData';
import { renderComponents } from '../utils/renderComponents/renderComponents';
import { BuilderSectionProps } from './builderSection.types';
import { useRenderBobSectionOnIframe } from './hooks/useRenderBobSectionOnIframe';
import { BOB } from '../utils/bob';

export function BuilderSection({ name }: BuilderSectionProps) {
  const { components } = mockSectionData;
  useRenderBobSectionOnIframe(name);
  // const { jsxElement: JsxElement, data: componentProps } =
  //   BOB._customComponents[0] || {};

  return (
    <div id={`bob-section-${name}`} className={styles['main-wrapper']}>
      {/* <h1>Welcome to BuilderSection!</h1> */}
      {/* {JsxElement && <JsxElement {...{ text: 'siema', price: 99 }} />} */}
      {renderComponents(components, 'section')}
    </div>
  );
}
