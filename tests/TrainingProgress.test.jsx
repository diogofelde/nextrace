import React from 'react';
import { render } from '@testing-library/react';
import TrainingProgress from '../src/components/TrainingProgress';

// Mock do gráfico para evitar erro de canvas no Jest
jest.mock('react-chartjs-2', () => ({
  Bar: () => <div>Mocked Chart</div>
}));

describe('TrainingProgress', () => {
  it('renderiza sem quebrar', () => {
    render(<TrainingProgress />);
  });
});