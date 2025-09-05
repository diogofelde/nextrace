import { render, screen } from '@testing-library/react';
import IdentityStatus from '../IdentityStatus';

describe('IdentityStatus component', () => {
  it('deve exibir o título "Status de Identidades"', () => {
    render(<IdentityStatus />);
    expect(screen.getByText(/Status de Identidades/i)).toBeInTheDocument();
  });
});