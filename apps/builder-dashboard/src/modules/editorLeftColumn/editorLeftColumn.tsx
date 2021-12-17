import React from 'react';
import { CustomComponentItem } from '../../components/customComponentItem/CustomComponentItem';
import { useBobComponentsData } from '../editorPage/context/BobComponentsData/BobComponentsData.hooks';
import { MainWrapper } from './editorLeftColumn.styles';

const EditorLeftColumn = () => {
  const data = useBobComponentsData();

  return (
    <MainWrapper>
      <h1>Left columnn</h1>
      {data.customComponents.map((customComponent) => (
        <CustomComponentItem
          key={customComponent.name}
          customComponent={customComponent}
        />
      ))}
    </MainWrapper>
  );
};

export default EditorLeftColumn;
