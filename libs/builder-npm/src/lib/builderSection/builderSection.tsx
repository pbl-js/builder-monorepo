import './builder-npm.module.css';

/* eslint-disable-next-line */
export interface BuilderSectionProps {
  name: string;
}

export function BuilderSection({ name }: BuilderSectionProps) {
  return (
    <div>
      <h1>Welcome to BuilderSection!</h1>
    </div>
  );
}
