import styled from 'styled-components';
import { BobSection } from '../BobSection/BobSection';
import { useBobComponentsData } from '../editorPage/context/BobComponentsData/BobComponentsData.hooks';

const MainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`;

export const ShadowLayer = (): JSX.Element => {
  const { sections } = useBobComponentsData();
  return (
    <>
      {sections.map((section) => (
        <BobSection key={section.name} sectionData={section} />
      ))}
    </>
  );
};
