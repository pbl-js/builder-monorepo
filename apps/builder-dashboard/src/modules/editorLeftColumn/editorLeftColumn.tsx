import { useQuery } from '@apollo/client';
import React from 'react';
import { CustomComponentItem } from '../../components/customComponentItem/CustomComponentItem';
import { useRegisteredComponents_API } from '../editorPage/utils/queries/getRegisteredComponents/hooks';
import { MainWrapper } from './editorLeftColumn.styles';

const EditorLeftColumn = () => {
  const { data } = useRegisteredComponents_API();

  return (
    <MainWrapper>
      <h1>Left columnn</h1>
      {data &&
        data.map((customComponent) => (
          <CustomComponentItem
            key={customComponent.name}
            customComponent={customComponent}
          />
        ))}
    </MainWrapper>
  );
};

export default EditorLeftColumn;
