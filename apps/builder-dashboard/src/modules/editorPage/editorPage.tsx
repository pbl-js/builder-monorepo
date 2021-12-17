import React from 'react';
import { Layout } from '../../components/layout/layout';
import { EditorHeader } from '../editorHeader/editorHeader';
import EditorLeftColumn from '../editorLeftColumn/editorLeftColumn';
import EditorRightColumn from '../editorRightColumn/editorRightColumn';
import { WorkSection } from './components/workSection/workSection';
import { BobComponentsDataProvider } from './context/BobComponentsData/BobComponentsData.context';
import { GlobalUiDataContextProvider } from './context/GlobalUiData/GlobalUiData.context';

export const EditorPage = () => {
  return (
    <BobComponentsDataProvider>
      <GlobalUiDataContextProvider>
        <Layout>
          <EditorHeader />
          <EditorLeftColumn />
          <WorkSection />
          <EditorRightColumn />
        </Layout>
      </GlobalUiDataContextProvider>
    </BobComponentsDataProvider>
  );
};
