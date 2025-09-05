import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header component', () => {
  it('deve exibir o título do cabeçalho', () => {
    render(<Header />);
    expect(screen.getByText(/Painel de Monitoramento/i)).toBeInTheDocument();
  });
});