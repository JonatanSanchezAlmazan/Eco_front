import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormLogin from './FormLogin';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

const mockDispatch = vi.fn();
const mockNavigate = vi.fn();

describe('FormLogin', () => {
  test('renderiza el formulario correctamente', () => {
    render(<FormLogin dispatch={mockDispatch} navigate={mockNavigate} />);

    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(screen.getByText(/Iniciar Sesión/i)).toBeInTheDocument();
  });

  test('muestra errores cuando los campos obligatorios están vacíos', async () => {
    render(<FormLogin dispatch={mockDispatch} navigate={mockNavigate} />);

    const submitButton = screen.getByText(/Iniciar Sesión/i);
    fireEvent.click(submitButton);

    expect(await screen.findByText(/el email es requerido/i)).toBeInTheDocument();
    expect(await screen.findByText(/la contraseña es requerida/i)).toBeInTheDocument();
  });
  it('envía el formulario con datos válidos', async () => {
    render(<FormLogin navigate={mockNavigate} dispatch={mockDispatch} />);

    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);

    await userEvent.type(emailInput, 'prueba1@hotmail.com');
    await userEvent.type(passwordInput, '99Prueba99!');

    const submitButton = screen.getByRole('button', { name: /Iniciar Sesión/i });
    await userEvent.click(submitButton);

    await waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1));
  });
});
