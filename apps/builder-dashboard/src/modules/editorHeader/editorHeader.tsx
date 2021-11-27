import styled from 'styled-components';
import { colors } from '../../theme/consts';

const { bg_primary, tx_primary, light_accent } = colors;

const MainWrapper = styled.div`
  grid-area: header;
  z-index: 1;

  width: 100%;
  height: 70px;
  background-color: ${bg_primary};
  color: ${tx_primary};
  border-bottom: 1px solid ${light_accent};
`;

export const EditorHeader = () => {
  return (
    <MainWrapper>
      <h3>siema</h3>
    </MainWrapper>
  );
};
