import { useForm } from 'react-hook-form';
import './FormAuth.css';
import Button from '../Button/Button';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const FormAuth = ({ fields, onSubmit, className, btnText, isLogin }) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      <h2>Bienvenido a Ecoturismo</h2>
      <p>Inicia sesión o registrate para continuar</p>
      <div className="form__auth--links">
        <NavLink className="form__auth--link" to="/login" type="button">
          Iniciar Sesión
        </NavLink>
        <NavLink className="form__auth--link" to="/register" type="button">
          Registrarse
        </NavLink>
      </div>
      {fields.map((field) => (
        <div key={field.name} className="field">
          <label htmlFor={field.name}>{field.label}</label>
          <input id={field.name} type={field.type === 'password' ? (showPassword ? 'text' : 'password') : field.type} {...register(field.name, field.validation)} placeholder={field.placeholder || ''} />
          {field.type === 'password' && <img className="view" src={showPassword ? '/icons/ojo-abierto.webp' : '/icons/ojo.webp'} alt="Mostrar contraseña" onClick={() => setShowPassword(!showPassword)} />}
          {errors[field.name] && <p className="form__auth--error">{errors[field.name].message}</p>}
        </div>
      ))}
      {!isLogin && (
        <div className="field">
          <label htmlFor="rol">Rol</label>
          <select id='rol' {...register('rol')}>
            <option>Usuario</option>
            <option>Propietario</option>
          </select>
        </div>
      )}
      <Button text={btnText} />
      <p>
        Al registrarte, aceptas nuestros <span>Términos y Condiciones</span> y nuestra <span>Política de Privacidad</span>
      </p>
    </form>
  );
};

export default FormAuth;
