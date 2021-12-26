import { TextInput } from '../../../../components/atoms/TextInput';
import { useEffect, useState } from 'react';
import { DraftComponent_DataItem_String } from '@bob-types';

interface Props {
  propData: DraftComponent_DataItem_String;
}

export const StringForm = ({
  propData: { name, value: initialValue },
}: Props) => {
  const [value, setValue] = useState(initialValue);

  useEffect(() => setValue(initialValue), [initialValue]);

  return (
    <TextInput
      label={name}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};
