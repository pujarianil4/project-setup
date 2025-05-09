interface IExampleProps {
  name: string;
  isActive: boolean;
}

export const Example = ({ name, isActive }: IExampleProps) => {
  const greeting = 'Hello';
  const message = `${greeting} ${name}`;

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
