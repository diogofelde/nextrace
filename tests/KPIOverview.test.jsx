import React from 'react';
import { render } from '@testing-library/react';
import KPIOverview from '../src/components/KPIOverview';

describe('KPIOverview', () => {
  it('renderiza sem quebrar', () => {
    render(<KPIOverview />);
  });
});