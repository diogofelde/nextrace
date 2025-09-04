import React from 'react';
import { render } from '@testing-library/react';
import Header from '../src/components/Header';

describe('Header', () => {
  it('renderiza sem quebrar', () => {
    render(<Header />);
  });
});