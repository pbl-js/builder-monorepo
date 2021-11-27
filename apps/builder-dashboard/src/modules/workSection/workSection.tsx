import styled from 'styled-components';

const StyledIFrame = styled.iframe`
  width: 100%;
  height: 99%;
`;

export const WorkSection = () => {
  return (
    <StyledIFrame
      src="http://localhost:4444"
      title="W3Schools Free Online Web Tutorials"
      id="cms-editor-iframe"
    />
  );
};
