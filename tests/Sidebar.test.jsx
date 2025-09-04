import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from '../src/components/Sidebar';

describe('Sidebar', () => {
  it('renderiza sem quebrar', () => {
    render(
      <MemoryRouter>
        <Sidebar />
      </MemoryRouter>
    );
  });
});