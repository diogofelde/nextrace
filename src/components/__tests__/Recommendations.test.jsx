import { render, screen } from '@testing-library/react';
import Recommendations from '../Recommendations';

describe('Recommendations component', () => {
  it('deve exibir o título "Recomendações de Segurança"', () => {
    render(<Recommendations />);
    expect(screen.getByText(/Recomendações de Segurança/i)).toBeInTheDocument();
  });
});