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
  const { id } = componentData;
  const ref = useSendComponentDataToDashboard(componentData);

  return (
    <div style={{ position: 'relative' }} ref={ref} id="#main-wrapper-bob">
      {children}
    </div>
  );
};
