import styles from './builderSection.module.css';
import { renderComponents } from '../utils/renderComponents/renderComponents';
import { useRenderBobSectionOnIframe } from './hooks/useRenderBobSectionOnIframe';
import { useEffect, useReducer, useRef } from 'react';
import {
  BuilderSectionDataContextProvider,
  useBuilderSectionData,
} from './context/builderSectionData.context';
import { useAddReciveMessageListener } from './hooks/useReceiveDataFromDashboard';

export interface BuilderSectionProps {
  name: string;
}

function BuilderSectionInner({ name }: BuilderSectionProps) {
  const ref = useRef(null);

  const {
    state: {
      draft: { components },
    },
  } = useBuilderSectionData();

  useRenderBobSectionOnIframe(ref);
  useAddReciveMessageListener();

  return (
    <div ref={ref} className={styles['main-wrapper']}>
      {/* {renderComponents({ components, currentParrent: 'section' })} */}
    </div>
  );
}

export const BuilderSection = ({ name }: BuilderSectionProps) => (
  <BuilderSectionDataContextProvider>
    <BuilderSectionInner name={name} />
  </BuilderSectionDataContextProvider>
);
