import React from 'react';
import styled from 'styled-components';

const MainWrapper = styled.main`
  width: 100%;
  height: 100vh;
  background-color: red;
`;

export const Layout: React.FC = ({ children }) => {
  return (
    <MainWrapper>
      <h1>siema</h1>
      {children}
    </MainWrapper>
  );
};
