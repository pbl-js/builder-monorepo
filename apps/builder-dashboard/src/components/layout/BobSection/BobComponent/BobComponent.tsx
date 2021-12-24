import { IDraftComponentData, IDraftData } from '@bob-types';
import { useGlobalUiDataState } from '../../../../modules/editorPage/context/GlobalUiData/GlobalUiData.hooks';
import styled, { css } from 'styled-components';
import { useBobComponentsData } from '../../../../modules/editorPage/context/BobComponentsData/BobComponentsData.hooks';
import EditableMargin from './EditableMargin';

interface MainWrapper_SC {
  isActive: boolean;
}

const MainWrapper = styled.div<MainWrapper_SC>`
  position: relative;
  z-index: 10;

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
  const { componentsDomData } = useBobComponentsData();
  const { setState, activeComponents } = useGlobalUiDataState();

  const matchDomData = componentsDomData.find(
    ({ componentId }) => componentId === componentData.id
  );

  const isComponentActive = Boolean(
    activeComponents.find(
      (activeComponentId) => activeComponentId === componentData.id
    ) && matchDomData
  );

  const { width, height = 0, left, top } = matchDomData?.domData || {};

  const { style } = componentData;

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

  return (
    <MainWrapper
      isActive={isComponentActive}
      onClick={onClick}
      style={{
        height,
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
