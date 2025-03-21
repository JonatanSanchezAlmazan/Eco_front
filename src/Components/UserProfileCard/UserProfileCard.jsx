import { useState } from 'react';
import { deleteUser, updateUser } from '../../Reducers/Users/users.action';
import Button from '../Button/Button';
import './UserCardProfile.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import useImagePreview from '../../Hooks/useImagePreview';

const UserProfileCard = ({ user, dispatch }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { preview, file, handleImageChange } = useImagePreview();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const navigate = useNavigate();

  async function onSubmit(data) {
    data.image = file;
    await updateUser({ dispatch, id: user._id, data, navigate });
  }

  async function removeUser() {
    await deleteUser({ dispatch, id: user._id });
  }

  return (
    <div className="profileCard">
      <h3>Información Personal</h3>
      <p>Actualiza tus datos personales</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profileCard__image">
          <div className="profileCard__image--content">
            <img src={user.image} alt="imagen usuario" width={100} height={100} />
          </div>
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" placeholder={user.name} {...register('name')} />
          </div>
        </div>
        <div className="field">
          <label htmlFor="image">Imagen de perfil</label>
          <input id="image" type="file" accept="image/*" onChange={handleImageChange} className="hidden-input" />
          <label htmlFor="image" className={preview ? 'image__preview' : 'image__noPreview'}>
            {preview ? <img src={preview} alt="Vista previa" /> : <p className="field">Sube tu imagen</p>}
          </label>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            placeholder={user.email}
            {...register('email', {
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: 'El email no tiene un formato válido'
              }
            })}
          />
          {errors && <p className="form__error">{errors.email?.message}</p>}
        </div>
        <div className="profileCard__buttons">
          <Button text="Actualizar Perfil" />
          <Button fnc={() => setShowConfirm(true)} type="button" text="Eliminar Cuenta" />
        </div>
      </form>
      {showConfirm && <ConfirmModal remove={removeUser} setShow={setShowConfirm} text="¿Estás seguro de que quieres eliminar tu cuenta?" />}
    </div>
  );
};

export default UserProfileCard;
