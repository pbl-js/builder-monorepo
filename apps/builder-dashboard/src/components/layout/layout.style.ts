import styled from 'styled-components';

export const Wrapper = styled.main`
  overflow: hidden;
  height: 100vh;
  width: 100%;

  display: grid;
  grid-template-rows: 70px 1fr;
  grid-template-columns: 200px 1fr 300px;
  grid-template-areas:
    'header header header'
    'left iframe right';
`;
