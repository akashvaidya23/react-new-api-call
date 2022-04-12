const Button = ({ clickHandler, value, name, className }) => {
  return (
    <button onClick={clickHandler} className={className}>
      {name} {value}
    </button>
  );
};

export default Button;
