export const fieldsLogin = [
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'tu@email.com',
    validation: {
      required: 'El email es obligatorio',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'El email no tiene un formato válido'
      }
    }
  },
  {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
    placeholder: '**********',
    validation: {
      required: 'La contraseña es obligatoria',
      minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        message: 'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial'
      }
    }
  }
];
export const fieldsRegister = [
  { name: 'name', label: 'Nombre', type: 'text', placeholder: 'Tu Nombre', validation: { required: 'El nombre es requerido' } },
  {
    name: 'email',
    label: 'Email',
    placeholder: 'tu@email.com',
    validation: {
      required: 'El email es obligatorio',
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: 'El email no tiene un formato válido'
      }
    }
  },
  {
    name: 'password',
    label: 'Contraseña',
    type: 'password',
    placeholder: '**********',
    validation: {
      required: 'La contraseña es obligatoria',
      minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' },
      pattern: {
        value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        message: 'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial'
      }
    }
  },
  { name: 'file', label: 'Imagen de perfil', type: 'file', placeholder: '', validation: {} }
];
