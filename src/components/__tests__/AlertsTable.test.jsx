import { render, screen } from '@testing-library/react';
import AlertsTable from '../AlertsTable';

describe('AlertsTable component', () => {
  it('deve renderizar o título "Alertas Recentes"', () => {
    render(<AlertsTable />);
    expect(screen.getByText(/Alertas Recentes/i)).toBeInTheDocument();
  });

  it('deve exibir os dados da tabela', () => {
    render(<AlertsTable />);
    expect(screen.getByText(/Login suspeito/i)).toBeInTheDocument();
    expect(screen.getByText(/22\/08\/2025/i)).toBeInTheDocument();
    expect(screen.getByText(/Pendente/i)).toBeInTheDocument();
    expect(screen.getByText(/Vazamento de dados/i)).toBeInTheDocument();
    expect(screen.getByText(/20\/08\/2025/i)).toBeInTheDocument();
    expect(screen.getByText(/Resolvido/i)).toBeInTheDocument();
  });
});