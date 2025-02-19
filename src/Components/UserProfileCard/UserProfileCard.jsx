import { useContext, useState } from 'react';
import { deleteUser, updateUser } from '../../Redecuers/Users/users.action';
import Button from '../Button/Button';
import './UserCardProfile.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import Loading from '../Loading/Loading';

const UserProfileCard = ({ user, dispatch, isLoading }) => {
  const [showConfirm, setShowConfirm] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty }
  } = useForm();
  const navigate = useNavigate();
  console.log(isDirty);

  async function onSubmit(data) {
    await updateUser({ dispatch, id: user._id, data, navigate });
  }

  async function removeUser() {
    await deleteUser({ dispatch, id: user._id, navigate });
  }

  return (
    <div className="profileCard">
      {isLoading && <Loading />}
      <h3>Información Personal</h3>
      <p>Actualiza tus datos personales</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="profileCard__image">
          <img src={user.image} alt="imagen usuario" />
          <div>
            <label htmlFor="name">Nombre</label>
            <input type="text" placeholder={user.name} {...register('name')} />
          </div>
        </div>
        <div>
          <label htmlFor="">Imagen</label>
          <input type="file" {...register('file')} />
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
          {errors && <p className="form__auth--error">{errors.email?.message}</p>}
        </div>
        <div className="profileCard__buttons">
          <Button isDirty={isDirty} text="Actualizar Perfil" />
          <Button fnc={() => setShowConfirm(true)} type="button" text="Eliminar Cuenta" />
        </div>
      </form>
      {showConfirm && <ConfirmModal remove={removeUser} setShow={setShowConfirm} text="¿Estás seguro de que quieres eliminar tu cuenta?" />}
    </div>
  );
};

export default UserProfileCard;
