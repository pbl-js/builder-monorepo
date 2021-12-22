import { IDraftData } from '@bob-types';
import styled from 'styled-components';
import { RenderComponents } from './RenderComponents/RenderComponents';

const MainWrapper = styled.div`
  position: absolute;
  z-index: 10;

  &:hover {
    border: 4px solid #0099fe;
  }
`;

interface Props {
  sectionData: IDraftData;
}

export const BobSection = ({ sectionData }: Props) => {
  const { left, top, width, height } = sectionData.domData;
  const style = { top, left, width, height };

  const { components } = sectionData;

  // const matchingComponents = components.filter(
  //   ({ parentId }) => parentId === currentParrent
  // );

  return (
    <MainWrapper style={style}>
      <RenderComponents components={components} />
    </MainWrapper>
  );
};
