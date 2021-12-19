import { IDraftComponentData } from '@bob-types';
import { BOB } from '@builder-npm';

interface Props {
  componentData: IDraftComponentData;
}

export const BuilderComponentCustom = ({
  componentData,
}: Props): JSX.Element => {
  const { jsxName, data } = componentData;

  const { jsxElement: Component } =
    BOB._customComponents.find(({ name }) => jsxName === name) || {};

  return Component && <Component {...data} />;
};
