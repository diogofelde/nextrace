import { render, screen } from '@testing-library/react';
import Dashboard from '../Dashboard';

describe('Dashboard component', () => {
  it('deve renderizar o painel com título do cabeçalho', () => {
    render(<Dashboard />);
    expect(screen.getByText(/Painel de Monitoramento/i)).toBeInTheDocument();
  });
});