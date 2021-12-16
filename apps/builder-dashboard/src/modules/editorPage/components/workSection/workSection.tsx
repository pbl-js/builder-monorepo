import styled from 'styled-components';
import { ShadowLayer } from '../../../shadowLayer/ShadowLayer';

const MainWrapper = styled.div`
  position: relative;

  width: 100%;
  height: 99.5%;
`;

const StyledIFrame = styled.iframe`
  border: 0;
  width: 100%;
  height: 100%;
`;

export const WorkSection = () => {
  return (
    <MainWrapper>
      <ShadowLayer />
      <StyledIFrame
        src="http://localhost:4444"
        title="W3Schools Free Online Web Tutorials"
        id="cms-editor-iframe"
      />
    </MainWrapper>
  );
};
