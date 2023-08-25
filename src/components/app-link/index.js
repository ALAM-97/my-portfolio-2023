import "./index.scss";

const AppLink = ({ type, text, icon, anchor }) => {
  const handleClick = () => {
    if (anchor)
      document.getElementById(anchor)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={`AppLink ${type}`} onClick={handleClick}>
      <img className="doodle" src="/assets/doodle.png" alt="doodle" />
      <div className="content">
        <div>{text}</div>
        <span className="material-symbols-outlined">{icon}</span>
      </div>
    </div>
  );
};

export default AppLink;
