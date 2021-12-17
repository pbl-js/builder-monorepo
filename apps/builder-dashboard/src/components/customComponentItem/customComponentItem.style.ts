import styled from 'styled-components';
import { colors } from '../../theme/consts';

const { bg_secondary, light_accent } = colors;

export const MainWrapper = styled.div`
  position: relative;
  z-index: 50;

  width: 100%;
  height: 70px;
  padding: 15px;
  border-radius: 10px;
  background-color: ${bg_secondary};
  border: 1px solid ${light_accent};

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: move;
  cursor: grab;
`;
