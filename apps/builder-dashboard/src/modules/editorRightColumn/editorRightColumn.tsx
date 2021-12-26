import React from 'react';
import { useBobComponentsData } from '../editorPage/context/BobComponentsData/BobComponentsData.hooks';
import { useGlobalUiDataState } from '../editorPage/context/GlobalUiData/GlobalUiData.hooks';
import { EditComponentForm } from './components/EditComponentForm/EditComponentForm';
import { MainWrapper } from './editorRightColumn.styles';

const EditorRightColumn = () => {
  const { activeComponents } = useGlobalUiDataState();
  const { activeDraft } = useBobComponentsData();
  const isOneComponentSelected = activeComponents.length === 1;
  const componentToEditId = isOneComponentSelected && activeComponents[0];
  const componentToEdit = activeDraft?.components.find(
    ({ id }) => componentToEditId === id
  );
  const { customComponents } = useBobComponentsData();

  const { jsxName } = componentToEdit || {};
  const matchedCustomComponent = customComponents.find(
    ({ name }) => name === jsxName
  );

  return (
    <MainWrapper>
      <h1>Right column</h1>
      {componentToEdit && matchedCustomComponent && (
        <EditComponentForm
          componentData={componentToEdit}
          bobCustomDomponent={matchedCustomComponent}
        />
      )}
    </MainWrapper>
  );
};

export default EditorRightColumn;
