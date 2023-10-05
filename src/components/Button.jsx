const Button = ({ children, handleOnClick, type = "" }) => {
  return (
    <button className={`btn${type}`} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
