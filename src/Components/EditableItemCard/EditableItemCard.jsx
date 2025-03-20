import { useState } from 'react';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import './EditableItemCard.css';
import { deleteActivity } from '../../Reducers/Activities/activities.action';
import { deleteAccommodation } from '../../Reducers/Accommodations/accommodations.action';

const EditableItemCard = ({ item, navigate, type, dispatch }) => {
  const [showConfirm, setShowConfirm] = useState(false);

  async function removeActivity() {
    await deleteActivity({ dispatch, id: item._id });
  }

  async function removeAccommodation() {
    await deleteAccommodation({ dispatch, id: item._id });
  }

  return (
    <div className="editable__item" key={item._id}>
      <p>{item.name}</p>
      <div>
        <img onClick={() => (type === 'Accommodation' ? navigate(`/updateAccommodation/${item._id}`) : navigate(`/updateActivity/${item._id}`))} src="/icons/lapiz.webp" alt="icono editar" />
        <img onClick={() => setShowConfirm(!showConfirm)} src="/icons/borrar.webp" alt="icono borrar" />
      </div>
      {showConfirm && <ConfirmModal text={`Seguro que quieres eliminar ${item.name}`} setShow={setShowConfirm} remove={() => (type === 'Activity' ? removeActivity() : removeAccommodation())} />}
    </div>
  );
};

export default EditableItemCard;
