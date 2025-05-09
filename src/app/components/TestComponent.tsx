import React from 'react';

interface IProps {
  _name: string; // Prefix with underscore to indicate unused
  isActive: boolean;
}

const TestComponent: React.FC<IProps> = ({ _name, isActive }): React.ReactElement => {
  const message = 'Hello';

  if (isActive) {
    console.warn(message);
  }

  return (
    <div className='container'>
      <span>{message}</span>
      <br />
    </div>
  );
};

export default TestComponent;
