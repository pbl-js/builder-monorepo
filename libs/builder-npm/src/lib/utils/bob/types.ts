export interface RegisterComponentInputString {
  type: 'string';
  name: string;
  defaultValue: string;
}

export interface RegisterComponentInputNumber {
  type: 'number';
  name: string;
  defaultValue: number;
}

export type RegisterComponentInput =
  | RegisterComponentInputString
  | RegisterComponentInputNumber;
