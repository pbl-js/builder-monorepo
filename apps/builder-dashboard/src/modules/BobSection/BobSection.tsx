import { IDraftData } from '@bob-types';
import styled from 'styled-components';

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

export const BobSection = (props: Props) => {
  const { left, top, width, height } = props.sectionData.domData;
  const style = { top, left, width, height };

  return <MainWrapper style={style}></MainWrapper>;
};
