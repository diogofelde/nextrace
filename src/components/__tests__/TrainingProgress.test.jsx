import { render, screen } from '@testing-library/react';
import TrainingProgress from '../TrainingProgress';

describe('TrainingProgress component', () => {
  it('deve exibir o título "Progresso de Treinamentos"', () => {
    render(<TrainingProgress />);
    expect(screen.getByText(/Progresso de Treinamentos/i)).toBeInTheDocument();
  });
});