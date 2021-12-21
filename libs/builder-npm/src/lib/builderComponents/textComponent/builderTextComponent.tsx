import { ComponentOrder } from '@bob-typess';
import { defaultStyles } from './consts';

export const BuilderTextComponent: React.FC<{ component: ComponentOrder }> = ({
  component: { style },
}) => {
  const newStyles = {
    ...defaultStyles,
    ...style,
  };

  return <p style={newStyles}>cfg</p>;
};
