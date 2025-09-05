import { render, screen } from '@testing-library/react';
import KPIOverview from '../KPIOverview';

describe('KPIOverview component', () => {
  it('deve exibir o título "Indicadores de Segurança"', () => {
    render(<KPIOverview />);
    expect(screen.getByText(/Indicadores de Segurança/i)).toBeInTheDocument();
  });
});