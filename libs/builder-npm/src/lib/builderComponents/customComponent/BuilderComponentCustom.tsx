import {
  BobComponentProps,
  IDraftComponentData,
  IDraftComponent_DataItem,
} from '@bob-types';
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

  const generateProps = (
    propsApiData: IDraftComponent_DataItem[]
  ): BobComponentProps => {
    const props: BobComponentProps = {};
    propsApiData.forEach(({ name, value }) => (props[name] = value));
    return props;
  };

  const props = generateProps(componentData.data);

  return Component ? (
    <BuilderComponentCommonWrapper componentData={componentData}>
      <Component {...props} />
    </BuilderComponentCommonWrapper>
  ) : null;
};
