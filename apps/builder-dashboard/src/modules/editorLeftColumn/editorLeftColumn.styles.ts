import styled from 'styled-components';
import { colors } from '../../theme/consts';

const { bg_primary, tx_primary } = colors;

export const MainWrapper = styled.div`
  grid-area: left;

  background-color: ${bg_primary};
  color: ${tx_primary};
  padding: 15px;
`;
