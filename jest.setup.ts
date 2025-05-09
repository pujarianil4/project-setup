// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { jest } from '@jest/globals';
import React from 'react';

declare global {
  interface IMatchers<R> {
    toHaveClass: (className: string) => R;
  }
}

const mockRouter = {
  useRouter: (): object => ({
    route: '/',
    pathname: '',
    query: {},
    asPath: '',
    push: jest.fn(),
    replace: jest.fn(),
  }),
};

jest.mock('next/router', () => mockRouter);

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: Record<string, unknown>): React.ReactElement =>
    // eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element
    React.createElement('img', props),
}));
