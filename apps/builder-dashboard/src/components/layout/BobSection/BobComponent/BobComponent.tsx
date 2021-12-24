import { IDraftComponentData, IDraftData } from '@bob-types';
import { useGetBobDataFromIframe } from '../../../../modules/editorPage/hooks/useGetBobDataFromIFrame/useGetBobDataFromIframe';
import styled from 'styled-components';
import { useBobComponentsData } from '../../../../modules/editorPage/context/BobComponentsData/BobComponentsData.hooks';

const MainWrapper = styled.div`
  box-sizing: content-box;
  z-index: 10;
  position: reltive;

  &:hover {
    border: 2px solid #0099fe;
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
  const { style } = componentData;

  return <MainWrapper style={{ height, ...style }}></MainWrapper>;
};
