import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  it('renderiza sem quebrar', () => {
    render(<App />);
  });
});