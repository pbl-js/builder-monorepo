import { IDraftComponentData } from '@bob-types';
import { BOB } from '../../utils/bob';
import { BuilderComponentCommonWrapper } from '../commonWrapper/BuilderComponentCommonWrapper';

interface Props {
  componentData: IDraftComponentData;
}

export const BuilderComponentCustom = ({
  componentData,
}: Props): JSX.Element | null => {
  const { jsxName, data } = componentData;

  const { jsxElement: Component } =
    BOB._customComponents.find(({ name }) => jsxName === name) || {};

  return Component ? (
    <BuilderComponentCommonWrapper componentData={componentData}>
      <Component {...data} />
    </BuilderComponentCommonWrapper>
  ) : null;
};
