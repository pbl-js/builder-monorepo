import { TextInput } from '../../../../components/atoms/TextInput';
import { useState } from 'react';

interface Props {
  name: string;
  defaultValue: string;
}

export const StringForm = ({ name, defaultValue }: Props) => {
  const [value, setValue] = useState(defaultValue);

  return (
    <TextInput
      label={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
