import { BobRect, ComponentStyles } from '@bob-types';
import styled, { css } from 'styled-components';

interface Props {
  componentStyle: ComponentStyles;
  rectData: BobRect;
}

interface RenderMargin_SC extends Props {
  position: 'top' | 'bottom' | 'left' | 'right';
}

const MarginItem = styled.span<RenderMargin_SC>`
  display: block;
  position: absolute;
  background-color: hsl(204, 100%, 90%);

  /* TODO: Wydziel ten kod */
  &::after {
    position: absolute;
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid hsl(204, 100%, 50%);
  }

  ${({ componentStyle, position }) => {
    switch (position) {
      case 'top':
        return css`
          left: 0;
          bottom: 100%;
          width: 100%;
          height: ${componentStyle.marginTop};
        `;
      case 'bottom':
        return css`
          left: 0;
          top: 100%;
          width: 100%;
          height: ${componentStyle.marginBottom};
        `;
      case 'left':
        return css`
          right: 100%;
          top: 0;
          width: ${componentStyle.marginLeft};
          height: 100%; ;
        `;
      case 'right':
        return css`
          left: 100%;
          top: 0;
          width: ${componentStyle.marginRight};
          height: 100%; ;
        `;
      default:
        break;
    }
  }}
`;

const EditableMargin = ({ componentStyle, rectData }: Props) => {
  const { marginTop, marginBottom, marginLeft, marginRight } = componentStyle;

  return (
    <>
      {marginTop && (
        <MarginItem
          position="top"
          rectData={rectData}
          componentStyle={componentStyle}
        />
      )}
      {marginBottom && (
        <MarginItem
          position="bottom"
          rectData={rectData}
          componentStyle={componentStyle}
        />
      )}
      {marginLeft && (
        <MarginItem
          position="left"
          rectData={rectData}
          componentStyle={componentStyle}
        />
      )}
      {marginRight && (
        <MarginItem
          position="right"
          rectData={rectData}
          componentStyle={componentStyle}
        />
      )}
    </>
  );
};

export default EditableMargin;
