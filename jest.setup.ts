import '@testing-library/jest-dom';
import type { Router } from 'next/router';
import type { ImageProps } from 'next/image';

// Mock next/router
jest.mock('next/router', () => ({
  useRouter(): Partial<Router> {
    return {
      route: '/',
      pathname: '',
      query: {},
      asPath: '',
      push: jest.fn(),
      replace: jest.fn(),
    };
  },
}));

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: ImageProps): { type: string; props: ImageProps } => ({
    type: 'img',
    props: { ...props },
  }),
}));
