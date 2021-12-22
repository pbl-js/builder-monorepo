import { IDraftComponentData } from '@bob-types';
import { useRef } from 'react';
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
  const ref = useRef<HTMLDivElement>(null);

  const { id } = componentData;
  useSendComponentDataToDashboard(componentData, ref);

  return <div ref={ref}>{children}</div>;
};
