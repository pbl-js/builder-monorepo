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
    state: { draft },
  } = useBuilderSectionData();
  console.log('draft', draft);
  useRenderBobSectionOnIframe(ref);
  useAddReciveMessageListener();

  return (
    <div ref={ref} className={styles['main-wrapper']}>
      {draft &&
        renderComponents({
          components: draft.components,
          currentParrent: 0,
        })}
    </div>
  );
}

export const BuilderSection = ({ name }: BuilderSectionProps) => (
  <BuilderSectionDataContextProvider>
    <BuilderSectionInner name={name} />
  </BuilderSectionDataContextProvider>
);
