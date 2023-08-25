import "./index.scss";

const Button = ({ text, icon, link }) => {
  const handleClick = () => {
    window.open(link, "_blank");
  };
  return (
    <button className="AppButton" onClick={handleClick}>
      <p>{text}</p>
      {icon}
    </button>
  );
};

export default Button;
