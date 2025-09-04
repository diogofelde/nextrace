import React from 'react';
import { render } from '@testing-library/react';
import IdentityStatus from '../src/components/IdentityStatus';

describe('IdentityStatus', () => {
  it('renderiza sem quebrar', () => {
    render(<IdentityStatus />);
  });
});