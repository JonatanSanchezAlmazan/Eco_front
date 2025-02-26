import Button from "../../../Components/Button/Button"


const Step3 = ({register, errors,  accommodation}) => {
  return (
    <div className="step">
      <div>
        <label htmlFor="rules">
          Normas <span>Separa cada palabra por una coma</span>
        </label>
        <textarea id="rules" placeholder={accommodation.rules} {...register('rules')}></textarea>
      </div>
      <div>
        <label htmlFor="paymentType">Tipo de pago</label>
        <select name="paymentType" id="paymentType" {...register('paymentType')}>
          <option value={accommodation.paymentType}>{accommodation.paymentType}</option>
          <option value="Visa">Visa</option>
          <option value="PayPal">PayPal</option>
          <option value="Transeferencía">Transeferencía</option>
          <option value="Efectivo">Efectivo</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="email">Email de contacto</label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder={accommodation.contactDetails['email']}
          {...register('email', {
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
          placeholder={accommodation.contactDetails['phone']}
          {...register('phone', {
            pattern: {
              value: /^\d+$/,
              message: 'El teléfono no tiene un formato válido'
            }
          })}
        />
        {errors.phone && <p className="form__error">{errors.phone.message}</p>}
      </div>
      <Button text="Actualizar Alojamiento" />
    </div>
  )
}

export default Step3