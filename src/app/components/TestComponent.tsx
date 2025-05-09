interface IProps {
  _name: string; // Prefix with underscore to indicate unused
  isActive: boolean;
}

export const TestComponent = ({ _name, isActive }: IProps) => {
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
