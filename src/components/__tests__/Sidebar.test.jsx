import { render, screen } from '@testing-library/react';
import Sidebar from '../Sidebar';

describe('Sidebar component', () => {
  it('deve exibir o nome NexTrace', () => {
    render(<Sidebar />);
    expect(screen.getByText(/NexTrace/i)).toBeInTheDocument();
  });

  it('deve conter o link Dashboard', () => {
    render(<Sidebar />);
    expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
  });

  it('deve conter o link Alertas', () => {
    render(<Sidebar />);
    expect(screen.getByText(/Alertas/i)).toBeInTheDocument();
  });
});