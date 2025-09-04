import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../src/pages/Dashboard';

describe('Dashboard', () => {
  it('renderiza sem quebrar', () => {
    render(<Dashboard />);
  });
});