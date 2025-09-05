import { render, screen } from '@testing-library/react';
import Chart from '../Chart';

describe('Chart component', () => {
  it('deve renderizar o título "Atividade de Rede"', () => {
    render(<Chart />);
    expect(screen.getByText(/Atividade de Rede/i)).toBeInTheDocument();
  });
});