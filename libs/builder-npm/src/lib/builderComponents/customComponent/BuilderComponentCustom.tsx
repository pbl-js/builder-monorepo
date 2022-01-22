import {
  BobComponentProps,
  DraftComponent_DataItem,
  IDraftComponentData,
  isNumberProp,
  isStringProp,
} from '@bob-types';
import { BOB } from '../../utils/bob';
import { BuilderComponentCommonWrapper } from '../commonWrapper/BuilderComponentCommonWrapper';

interface Props {
  componentData: IDraftComponentData;
}

export const BuilderComponentCustom = ({
  componentData,
}: Props): JSX.Element | null => {
  const { jsxName, inputs } = componentData;

  const { jsxElement: Component } =
    BOB._customComponents.find(({ name }) => jsxName === name) || {};

  const generateProps = (
    propsApiData: DraftComponent_DataItem[]
  ): BobComponentProps => {
    const props: BobComponentProps = {};

    propsApiData.forEach((propApi) => {
      const { name } = propApi;

      if (isStringProp(propApi)) {
        props[name] = propApi.valueString;
      }

      if (isNumberProp(propApi)) {
        props[name] = propApi.valueNumber;
      }
    });

    return props;
  };

  const generatedProps = generateProps(inputs);

  return Component ? (
    <BuilderComponentCommonWrapper componentData={componentData}>
      <Component {...generatedProps} />
    </BuilderComponentCommonWrapper>
  ) : null;
};
