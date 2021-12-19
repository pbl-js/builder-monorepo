import styles from './builderSection.module.css';
import { mockSectionData } from './mockSectionData';
import { renderComponents } from '../utils/renderComponents/renderComponents';
import { useRenderBobSectionOnIframe } from './hooks/useRenderBobSectionOnIframe';
import { BOB } from '../utils/bob';
import { builderSectionDataReducer } from './reducer/builderSectionData.reducer';
import { useEffect, useReducer } from 'react';
import { BuilderSectionDataContextProvider } from './context/builderSectionData.context';
import { useAddReciveMessageListener } from './hooks/useReceiveDataFromDashboard';
import { BuilderSectionDataContext } from './context/builderSectionData.consts';
import { BuilderSectionDataActionKindEnum } from './context/builderSectionData.types';
import { useBuilderSectionData } from './context/builderSectionData.hooks';

export interface BuilderSectionProps {
  name: string;
}

function BuilderSectionInner({ name }: BuilderSectionProps) {
  const {
    sectionData: { components, name: sectionName },
  } = useBuilderSectionData();

  useRenderBobSectionOnIframe();
  useAddReciveMessageListener();

  return (
    <div id={`bob-section-${name}`} className={styles['main-wrapper']}>
      <h1>{name}</h1>
      {renderComponents(components, 'section')}
    </div>
  );
}

export const BuilderSection = ({ name }: BuilderSectionProps) => (
  <BuilderSectionDataContextProvider>
    <BuilderSectionInner name={name} />
  </BuilderSectionDataContextProvider>
);
