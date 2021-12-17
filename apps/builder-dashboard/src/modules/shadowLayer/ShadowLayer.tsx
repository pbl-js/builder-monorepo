import styled from 'styled-components';
import { BobSection } from '../BobSection/BobSection';
import { useBobComponentsData } from '../editorPage/context/BobComponentsData/BobComponentsData.hooks';
import { useGlobalUiDataState } from '../editorPage/context/GlobalUiData/GlobalUiData.hooks';

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
  const { sections } = useBobComponentsData();
  return (
    <>
      {isDragging && <CoverLayer />}
      {sections.map((section) => (
        <BobSection key={section.name} sectionData={section} />
      ))}
    </>
  );
};
