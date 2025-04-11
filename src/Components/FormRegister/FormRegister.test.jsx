import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import FormRegister from './FormRegister';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('FormRegister', () => {
  const mockNavigate = vi.fn();
  const mockDispatch = vi.fn();

  it('renderiza correctamente el formulario', () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/imagen de perfil/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rol/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /registrarse/i })).toBeInTheDocument();
  });

  it('muestra errores cuando los campos obligatorios están vacíos', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    userEvent.click(submitButton);

    expect(await screen.findByText(/el nombre es requerido/i)).toBeInTheDocument();
    expect(await screen.findByText(/el email es requerido/i)).toBeInTheDocument();
    expect(await screen.findByText(/la contraseña es requerida/i)).toBeInTheDocument();
    expect(await screen.findByText(/el rol es requerido/i)).toBeInTheDocument();
  });

  it('muestra un error cuando el formato del email es incorrecto', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    const emailInput = screen.getByLabelText(/email/i);
    userEvent.type(emailInput, 'pruebadominio.com');

    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    userEvent.click(submitButton);

    expect(await screen.findByText(/el email no tiene un formato válido/i)).toBeInTheDocument();
  });

  it('muestra un error si no se selecciona un rol', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const rolSelect = screen.getByLabelText(/rol/i);

    userEvent.type(nameInput, 'Juan Perez');
    userEvent.type(emailInput, 'juan@example.com');
    userEvent.type(passwordInput, 'Contraseña123!');

    fireEvent.change(rolSelect, { target: { value: '' } });

    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    userEvent.click(submitButton);

    expect(await screen.findByText(/el rol es requerido/i)).toBeInTheDocument();
  });

  it('envía el formulario con datos válidos', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const rolSelect = screen.getByLabelText(/rol/i);

    await userEvent.type(nameInput, 'Jonatan');
    await userEvent.type(emailInput, 'jonatansan1@hotmail.com');
    await userEvent.type(passwordInput, '99Jonatan99!');
    await userEvent.selectOptions(rolSelect, 'user');

    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    await userEvent.click(submitButton);

    await waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1));
  });
});
