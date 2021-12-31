import { useQuery } from '@apollo/client';
import React from 'react';
import { CustomComponentItem } from '../../components/customComponentItem/CustomComponentItem';
import { useBobComponentsData } from '../editorPage/context/BobComponentsData/BobComponentsData.hooks';
import { useRegisteredComponents_API } from '../editorPage/utils/queries/getRegisteredComponents/hooks';
import { GET_REGISTERED_COMPONENTS } from '../editorPage/utils/queries/getRegisteredComponents/query';
import { GetRegisteredComponents } from '../editorPage/utils/queries/getRegisteredComponents/types';
import { MainWrapper } from './editorLeftColumn.styles';

const EditorLeftColumn = () => {
  const { customComponents } = useBobComponentsData();
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
