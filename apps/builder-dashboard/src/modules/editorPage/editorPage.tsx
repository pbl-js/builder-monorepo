import React from 'react';
import { Layout } from '../../components/layout/layout';
import { EditorHeader } from '../editorHeader/editorHeader';
import EditorLeftColumn from '../editorLeftColumn/editorLeftColumn';
import EditorRightColumn from '../editorRightColumn/editorRightColumn';
import { WorkSection } from '../workSection/workSection';

export const EditorPage = () => {
  return (
    <Layout>
      <EditorHeader />
      <EditorLeftColumn />
      <WorkSection />
      <EditorRightColumn />
    </Layout>
  );
};
