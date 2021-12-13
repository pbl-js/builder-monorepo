export interface StringInputType {
  name: string;
  type: 'string';
  defaultValue: string;
}

export interface BooleanInputType {
  name: string;
  type: 'boolean';
  defaultValue: boolean;
}

export interface NumberInputType {
  name: string;
  type: 'number';
  defaultValue: number;
}

export type BOBInputData = StringInputType | BooleanInputType | NumberInputType;
