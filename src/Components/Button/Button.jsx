import './Button.css';

const Button = ({ text, fnc, type = 'submit', isDirty }) => {
  return (
    <button type={type} onClick={fnc} className="btn">
      {text}
    </button>
  );
};

export default Button;
