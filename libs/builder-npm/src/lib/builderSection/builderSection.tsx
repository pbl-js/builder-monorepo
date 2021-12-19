import styles from './builderSection.module.css';
import { mockSectionData } from './mockSectionData';
import { renderComponents } from '../utils/renderComponents/renderComponents';
import { BuilderSectionProps } from './builderSection.types';
import { useRenderBobSectionOnIframe } from './hooks/useRenderBobSectionOnIframe';
import { BOB } from '../utils/bob';
import { builderSectionDataReducer } from './context/builderSectionData.reducer';
import { useReducer } from 'react';
import { BuilderSectionDataContextProvider } from './context/builderSectionData.context';

export function BuilderSection({ name }: BuilderSectionProps) {
  const [state, dispatch] = useReducer(
    builderSectionDataReducer,
    mockSectionData
  );
  const { components } = state;

  useRenderBobSectionOnIframe(name);
  // const { jsxElement: JsxElement, data: componentProps } =
  //   BOB._customComponents[0] || {};

  return (
    <BuilderSectionDataContextProvider state={state} dispatch={dispatch}>
      <div id={`bob-section-${name}`} className={styles['main-wrapper']}>
        {/* <h1>Welcome to BuilderSection!</h1> */}
        {/* {JsxElement && <JsxElement {...{ text: 'siema', price: 99 }} />} */}
        {renderComponents(components, 'section')}
      </div>
    </BuilderSectionDataContextProvider>
  );
}
