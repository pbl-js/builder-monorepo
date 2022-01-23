import React from 'react';
import { Layout } from '../../components/layout/layout';
import { EditorHeader } from '../editorHeader/editorHeader';
import EditorLeftColumn from '../editorLeftColumn/editorLeftColumn';
import EditorRightColumn from '../editorRightColumn/editorRightColumn';
import { IFrameComunicator } from '../IFrameComunicator/IFrameComunicator';
import { WorkSection } from './components/workSection/workSection';
import { ComponentsRectDataProvider } from './context/ComponentsRectDataContext/ComponentsRectDataContext';
import { DraftDataProvider } from './context/DraftDataContext/DraftDataContext';
import { GlobalUiDataContextProvider } from './context/GlobalUiData/GlobalUiData.context';

export const EditorPage = ({ data }) => {
  return (
    <DraftDataProvider>
      <ComponentsRectDataProvider>
        <GlobalUiDataContextProvider>
          <IFrameComunicator />
          <Layout>
            <EditorHeader />
            <EditorLeftColumn />
            <WorkSection />
            <EditorRightColumn />
          </Layout>
        </GlobalUiDataContextProvider>
      </ComponentsRectDataProvider>
    </DraftDataProvider>
  );
};
