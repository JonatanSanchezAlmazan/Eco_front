import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import FormRegister from './FormRegister';
import { vi } from 'vitest';
import userEvent from '@testing-library/user-event';

describe('FormRegister', () => {
  const mockNavigate = vi.fn();
  const mockDispatch = vi.fn();

  it('renderiza correctamente el formulario', () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    // Verifica que los campos de entrada y etiquetas están presentes
    expect(screen.getByLabelText(/nombre/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/contraseña/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/imagen de perfil/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/rol/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /registrarse/i })).toBeInTheDocument();
  });

  it('muestra errores cuando los campos obligatorios están vacíos', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    // Simula enviar el formulario sin completar los campos
    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    userEvent.click(submitButton);

    // Espera que los mensajes de error estén presentes
    expect(await screen.findByText(/el nombre es requerido/i)).toBeInTheDocument();
    expect(await screen.findByText(/el email es requerido/i)).toBeInTheDocument();
    expect(await screen.findByText(/la contraseña es requerida/i)).toBeInTheDocument();
    expect(await screen.findByText(/el rol es requerido/i)).toBeInTheDocument();
  });

  it('muestra un error cuando el formato del email es incorrecto', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    const emailInput = screen.getByLabelText(/email/i);
    fireEvent.change(emailInput, { target: { value: 'incorrecto' } });

    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    userEvent.click(submitButton);

    // Verifica que el mensaje de error para el email esté visible
    expect(await screen.findByText(/el email no tiene un formato válido/i)).toBeInTheDocument();
  });

  it('muestra un error si la contraseña no cumple con los requisitos', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    const passwordInput = screen.getByLabelText(/contraseña/i);
    fireEvent.change(passwordInput, { target: { value: '123' } });

    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    userEvent.click(submitButton);

    // Verifica que el mensaje de error de contraseña aparezca
    expect(await screen.findByText(/la contraseña debe tener al menos 8 caracteres/i)).toBeInTheDocument();
  });

  it('envía el formulario con datos válidos', async () => {
    render(<FormRegister navigate={mockNavigate} dispatch={mockDispatch} />);

    // Completa los campos del formulario con datos válidos
    const nameInput = screen.getByLabelText(/nombre/i);
    const emailInput = screen.getByLabelText(/email/i);
    const passwordInput = screen.getByLabelText(/contraseña/i);
    const rolSelect = screen.getByLabelText(/rol/i);

    // Escribir datos válidos en el formulario
    await userEvent.type(nameInput, 'Jonatan');
    await userEvent.type(emailInput, 'jonatansan1@hotmail.com');
    await userEvent.type(passwordInput, '99Jonatan99!');
    await userEvent.selectOptions(rolSelect, 'Usuario');

    const submitButton = screen.getByRole('button', { name: /registrarse/i });
    await userEvent.click(submitButton);

    // Asegúrate de que el mock `dispatch` fue llamado
    await waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1));
  });
});
