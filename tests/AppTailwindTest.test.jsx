import React from 'react';
import { render } from '@testing-library/react';
import AppTailwindTest from '../src/AppTailwindTest';

describe('AppTailwindTest', () => {
  it('renderiza sem quebrar', () => {
    render(<AppTailwindTest />);
  });
});