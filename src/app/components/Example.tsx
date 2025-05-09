import React from 'react';

interface IExampleProps {
  title: string;
}

const Example: React.FC<IExampleProps> = ({ title }): React.ReactElement => (
  <div>
    <h1>{title}</h1>
  </div>
);

export default Example;
