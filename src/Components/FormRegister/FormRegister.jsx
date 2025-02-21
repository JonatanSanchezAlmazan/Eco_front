import { useForm } from 'react-hook-form';
import Button from '../Button/Button';
import './FormRegister.css';
import { useState } from 'react';
import useTogglePassword from '../../Hooks/useTooglePassword';

const FormRegister = ({ onSubmit }) => {
  const { showPassword, setShowPassword } = useTogglePassword();
  const [preview, setPreview] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="field">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          name="email"
          {...register('email', {
            required: 'El email es requerido',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: 'El email no tiene un formato válido'
            }
          })}
        />
        {errors.email && <p className="form__error">{errors.email.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="password">Contraseña</label>
        <input
          type={!showPassword ? 'password' : 'text'}
          id="password"
          name="password"
          {...register('password', {
            required: 'La contraseña es requerida',
            minLength: { value: 8, message: 'La contraseña debe tener al menos 8 caracteres' },
            pattern: {
              value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
              message: 'La contraseña debe tener al menos una letra mayúscula, una minúscula, un número y un carácter especial'
            }
          })}
        />
        <img className="view" src={!showPassword ? '/icons/ojo.webp' : '/icons/ojo-abierto.webp'} alt="Mostrar contraseña" onClick={() => setShowPassword(!showPassword)} />
        {errors.password && <p className="form__error">{errors.password.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="image">Imagen de perfil</label>
        <input id="image" type="file" accept="image/*" {...register('image')} onChange={handleImageChange} className="hidden-input" />
        <label htmlFor="image" className={preview ? 'image__preview' : 'image__noPreview'}>
          {preview ? <img src={preview} alt="Vista previa" /> : <p className="field">Sube tu imagen</p>}
        </label>
      </div>
      <div className="field">
        <label htmlFor="rol">Rol</label>
        <select id="rol" {...register('rol', { required: 'El rol es requerido' })}>
          <option value="">Selecciona un rol</option>
          <option>Usuario</option>
          <option>Propietario</option>
        </select>
        {errors.rol && <p className="form__error">{errors.rol.message}</p>}
      </div>
      <Button text="Registrarse" />
    </form>
  );
};

export default FormRegister;
