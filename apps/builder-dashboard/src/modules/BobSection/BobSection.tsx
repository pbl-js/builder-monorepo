import { IDraftData } from '@bob-types';
import styled, { css } from 'styled-components';
import { RenderComponents } from './RenderComponents/RenderComponents';
import useHoverDirty from 'react-use/lib/useHoverDirty';
import { useRef } from 'react';

interface MainWrapper_SC {
  isHovering: boolean;
}

const MainWrapper = styled.div<MainWrapper_SC>`
  box-sizing: content-box;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;

  ${({ isHovering }) =>
    isHovering &&
    css`
      &:hover {
        &::after {
          position: absolute;
          top: 0;
          left: 0;
          display: block;
          content: '';
          width: 100%;
          height: 100%;
          border: 1px solid hsl(204, 100%, 50%);
        }
      }
    `}
`;

interface Props {
  sectionData: IDraftData;
}

export const BobSection = ({ sectionData }: Props) => {
  const { left, top, width, height } = sectionData.domData || {};
  const style = { top, left, width, height };

  const { components } = sectionData;

  const ref = useRef(null);
  // const isHovering = useHoverDirty(ref);
  const isHovering = false;

  return (
    <MainWrapper ref={ref} isHovering={isHovering} style={style}>
      <RenderComponents components={components} />
    </MainWrapper>
  );
};
