import React from 'react';
import { render } from '@testing-library/react';
import Recommendations from '../src/components/Recommendations';

describe('Recommendations', () => {
  it('renderiza sem quebrar', () => {
    render(<Recommendations />);
  });
});