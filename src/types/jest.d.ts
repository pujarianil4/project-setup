import '@testing-library/jest-dom';

declare global {
  namespace jest {
    interface IMatchers<R> {
      toHaveClass: (className: string) => R;
    }
  }
}
