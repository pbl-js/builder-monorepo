import { ISectionData } from '@bob-types';
import styled from 'styled-components';

const MainWrapper = styled.div`
  position: absolute;

  &:hover {
    border: 4px solid #0099fe;
  }
`;

interface Props {
  sectionData: ISectionData;
}

export const BobSection = (props: Props) => {
  const { left, top, width, height } = props.sectionData.domData;
  const style = { top, left, width, height };

  return <MainWrapper style={style}></MainWrapper>;
};
