import { StyledInput, StyledLabel } from './textInput.style';

interface Props {
  value: string;
  label: string;
  onChange?: (e: any) => void;
  onBlur?: (e: any) => void;
}

export const TextInput = ({ value, label, onChange, onBlur }: Props) => {
  return (
    <StyledLabel>
      <span className="label">{label}</span>
      <StyledInput
        type="text"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </StyledLabel>
  );
};
