import React from 'react';
import { useComponentsRectData } from '../editorPage/context/ComponentsRectDataContext/ComponentsRectDataContext';
import {
  useDraftData,
  useDraftData_activeDraft,
} from '../editorPage/context/DraftDataContext/DraftDataContext';
import { useGlobalUiDataState } from '../editorPage/context/GlobalUiData/GlobalUiData.hooks';
import { UseDraft_API } from '../editorPage/utils/queries/getDraft/hooks';
import { useRegisteredComponents_API } from '../editorPage/utils/queries/getRegisteredComponents/hooks';
import { EditComponentForm } from './components/EditComponentForm/EditComponentForm';
import { MainWrapper } from './editorRightColumn.styles';

const EditorRightColumn = () => {
  const { activeComponents } = useGlobalUiDataState();
  const isOneComponentSelected = activeComponents.length === 1;
  const componentToEditId = isOneComponentSelected && activeComponents[0];

  const draft = useDraftData_activeDraft();
  const { data: registeredComponents } = useRegisteredComponents_API();

  const componentToEdit = draft?.components.find(
    ({ id }) => componentToEditId === id
  );

  const { jsxName } = componentToEdit || {};
  const matchedCustomComponent = registeredComponents?.find(
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
