import { IDraftComponentData, IDraftData } from '@bob-types';
import { useGlobalUiDataState } from '../../editorPage/context/GlobalUiData/GlobalUiData.hooks';
import styled, { css } from 'styled-components';
import EditableMargin from './EditableMargin';
import useHoverDirty from 'react-use/lib/useHoverDirty';
import { useRef } from 'react';
import { useComponentsRectData } from '../../editorPage/context/ComponentsRectDataContext/ComponentsRectDataContext';

interface MainWrapper_SC {
  isActive: boolean;
  isHovering: boolean;
}

const MainWrapper = styled.div<MainWrapper_SC>`
  position: relative;
  z-index: 10;

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

  ${({ isActive }) =>
    isActive &&
    css`
      /* TODO: Wydziel ten kod */
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
    `}
`;

interface Props {
  componentData: IDraftComponentData;
}
export const BobComponent = ({ componentData }: Props) => {
  const {
    state: { componentsRectData },
  } = useComponentsRectData();
  const { setState, activeComponents } = useGlobalUiDataState();

  const matchDomData = componentsRectData.find(
    ({ componentId }) => componentId === componentData.id
  );

  const isComponentActive = Boolean(
    activeComponents.find(
      (activeComponentId) => activeComponentId === componentData.id
    ) && matchDomData
  );

  const { width, height = 0, left, top } = matchDomData?.domData || {};

  const { styles: style } = componentData;
  console.log('style', componentData);
  const {
    paddingTop: s_paddingTop = 0,
    paddingBottom: s_paddingBottom = 0,
    paddingLeft: s_paddingLeft = 0,
    paddingRight: s_paddingRight = 0,

    marginTop: s_marginTop = 0,
    marginBottom: s_marginBottom = 0,
    marginLeft: s_marginLeft = 0,
    marginRight: s_marginRight = 0,
  } = style;

  const onClick = () => {
    // TODO: Handle select multiple component with shift
    setState((prevState) => {
      return {
        ...prevState,
        activeComponents: [componentData.id],
      };
    });
  };

  const ref = useRef(null);
  const isHovering = useHoverDirty(ref);

  return (
    <MainWrapper
      ref={ref}
      isHovering={isHovering}
      isActive={isComponentActive}
      onClick={onClick}
      style={{
        height,
        width,
        marginTop: s_marginTop,
        marginBottom: s_marginBottom,
        marginLeft: s_marginLeft,
        marginRight: s_marginRight,
      }}
    >
      {isComponentActive && matchDomData && (
        <EditableMargin
          componentStyle={style}
          rectData={matchDomData.domData}
        />
      )}
    </MainWrapper>
  );
};
