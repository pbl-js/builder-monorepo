import styled from 'styled-components';
import { colors } from '../../theme/consts';

const {
  input_background,
  input_border,
  input_outline,
  input_value,
  input_label,
  // input_placeholder,
} = colors;

export const StyledLabel = styled.label`
  .label {
    display: block;
    margin-bottom: 4px;
    font-size: 12px;
    color: ${input_label};
  }
`;

export const StyledInput = styled.input`
  width: 100%;
  padding: 8px 6px;
  outline: 0;

  font-size: 14px;

  background-color: ${input_background};
  color: ${input_value};
  border: 1px solid ${input_border};

  &:focus {
    border: 1px solid ${input_outline};
  }
`;
