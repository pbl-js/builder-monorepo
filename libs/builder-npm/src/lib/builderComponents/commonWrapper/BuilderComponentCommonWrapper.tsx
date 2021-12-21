import { IDraftComponentData } from '@bob-types';
import { useSendComponentDataToDashboard } from '../../builderSection/hooks/useSendComponentDataToDashboard';
import { COMPONENT_SELECTOR } from '../../consts';

interface Props {
  children: JSX.Element | JSX.Element[];
  componentData: IDraftComponentData;
}

export const BuilderComponentCommonWrapper = ({
  componentData,
  children,
}: Props) => {
  const { id } = componentData;
  const data = useSendComponentDataToDashboard(componentData);

  return <div id={`${COMPONENT_SELECTOR}${id}`}>{children}</div>;
};
