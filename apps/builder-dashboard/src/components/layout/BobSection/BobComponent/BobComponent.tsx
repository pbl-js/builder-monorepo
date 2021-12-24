import { IDraftComponentData, IDraftData } from '@bob-types';
import { useGetBobDataFromIframe } from '../../../../modules/editorPage/hooks/useGetBobDataFromIFrame/useGetBobDataFromIframe';
import styled from 'styled-components';
import { useBobComponentsData } from '../../../../modules/editorPage/context/BobComponentsData/BobComponentsData.hooks';

const MainWrapper = styled.div`
  position: absolute;
  z-index: 10;
  background-color: red;

  &:hover {
    border: 4px solid #0099fe;
  }
`;

interface Props {
  componentData: IDraftComponentData;
}

export const BobComponent = ({ componentData }: Props) => {
  const { componentsDomData } = useBobComponentsData();

  const matchDomData = componentsDomData.find(
    ({ componentId }) => componentId === componentData.id
  );

  const { width, height, left, top } = matchDomData?.domData || {};

  return <MainWrapper style={{ width, height, left, top }}></MainWrapper>;
};
