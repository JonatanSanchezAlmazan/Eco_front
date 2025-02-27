import './Button.css';

const Button = ({ text, fnc, type = 'submit' }) => {
  return (
    <button type={type} onClick={fnc} className="btn">
      {text}
    </button>
  );
};

export default Button;
