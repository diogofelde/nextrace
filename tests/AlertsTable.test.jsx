import React from 'react';
import { render } from '@testing-library/react';
import AlertsTable from '../src/components/AlertsTable';

describe('AlertsTable', () => {
  it('renderiza sem quebrar', () => {
    render(<AlertsTable />);
  });
});