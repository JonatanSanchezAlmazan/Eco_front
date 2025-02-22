import Button from '../../../Components/Button/Button';

const Step3 = ({ register, errors }) => {
  return (
    <div className="step">
      <div>
        <h4>Requisitos y restricciones</h4>
        <p>Todos los campos son obligatorios</p>
      </div>
      <div>
        <label htmlFor="rules">
          Normas <span>Separa cada palabra por una coma</span>
        </label>
        <textarea id="rules" placeholder="Ej: Respeta la vegetación y fauna local, No interfieras ni dañes el entorno natural,  Sé respetuoso con los demás huéspedes y con el personal del alojamiento..." {...register('rules', { required: 'Los requisitos son requeridos' })}></textarea>
        {errors.rules && <p className="form__error">{errors.rules.message}</p>}
      </div>
      <div>
        <label htmlFor="paymentType">Tipo de pago</label>
        <select name="paymentType" id="paymentType" {...register('paymentType', { required: 'Selecciona un tipo de pago' })}>
          <option value="">Selecciona una opción</option>
          <option value="Visa">Visa</option>
          <option value="PayPal">PayPal</option>
          <option value="Transeferencía">Transeferencía</option>
          <option value="Efectivo">Efectivo</option>
        </select>
        {errors.paymentType && <p className="form__error">{errors.paymentType.message}</p>}
      </div>
      <div className="field">
        <label htmlFor="email">Email de contacto</label>
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
        <label htmlFor="phone">Teléfono de contacto</label>
        <input
          type="text"
          id="phone"
          name="phone"
          {...register('phone', {
            required: 'El teléfono es requerido',
            pattern: {
              value: /^\d+$/,
              message: 'El teléfoni no tiene un formato válido'
            }
          })}
        />
        {errors.phone && <p className="form__error">{errors.phone.message}</p>}
      </div>
      <Button text="Registrar alojamiento" />
    </div>
  );
};

export default Step3;
