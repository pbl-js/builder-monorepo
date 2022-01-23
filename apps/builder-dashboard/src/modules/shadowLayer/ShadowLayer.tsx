import styled from 'styled-components';
import { BobSection } from '../BobSection/BobSection';
// import { useBobComponentsData } from '../editorPage/context/ComponentsRectDataContext/BobComponentsData.hooks';
import { useGlobalUiDataState } from '../editorPage/context/GlobalUiData/GlobalUiData.hooks';
import { UseDraft_API } from '../editorPage/utils/queries/getDraft/hooks';

const CoverLayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  width: 100%;
  height: 100%;
`;

export const ShadowLayer = (): JSX.Element => {
  const { isDragging } = useGlobalUiDataState();
  const { data } = UseDraft_API(1);

  return (
    <>
      {isDragging && <CoverLayer />}
      {data && <BobSection sectionData={data} />}
    </>
  );
};
