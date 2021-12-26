import styled from 'styled-components';
import { colors } from '../../theme/consts';

const { bg_primary, tx_primary } = colors;

export const MainWrapper = styled.div`
  grid-area: right;
  padding: 15px;

  background-color: ${bg_primary};
  color: ${tx_primary};
`;
