import Button from '../Button/Button';
import './ConfirmModal.css';

const ConfirmModal = ({ remove, setShow,  text }) => {
  return (
    <div className="content__confirmModal">
        <div className="confirmModal">
          <p>{text}</p>
          <div className="confirmModal__buttons">
            <Button fnc={remove} text="Si, eliminar" />
            <Button fnc={() => setShow(false)} text="Cancelar" />
          </div>
        </div>
    </div>
  );
};

export default ConfirmModal;
