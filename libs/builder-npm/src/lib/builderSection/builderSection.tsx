import styles from './builderSection.module.css';
import { mockSectionData } from './mockSectionData';
import { renderComponents } from '../utils/renderComponents/renderComponents';
import { useRenderBobSectionOnIframe } from './hooks/useRenderBobSectionOnIframe';
import { BOB } from '../utils/bob';
import { builderSectionDataReducer } from './reducer/builderSectionData.reducer';
import { useReducer } from 'react';
import { BuilderSectionDataContextProvider } from './context/builderSectionData.context';

export interface BuilderSectionProps {
  name: string;
}

export function BuilderSection({ name }: BuilderSectionProps) {
  const [sectionData, dispatch] = useReducer(
    builderSectionDataReducer,
    mockSectionData
  );
  const { components } = sectionData;

  useRenderBobSectionOnIframe(name, sectionData);
  // const { jsxElement: JsxElement, data: componentProps } =
  //   BOB._customComponents[0] || {};

  return (
    <BuilderSectionDataContextProvider state={sectionData} dispatch={dispatch}>
      <div id={`bob-section-${name}`} className={styles['main-wrapper']}>
        {/* <h1>Welcome to BuilderSection!</h1> */}
        {/* {JsxElement && <JsxElement {...{ text: 'siema', price: 99 }} />} */}
        {renderComponents(components, 'section')}
      </div>
    </BuilderSectionDataContextProvider>
  );
}
