import "./index.scss";

const AboutBox = ({ title, text }) => {
  return (
    <div className="AboutBox">
      <div className="left-box">{title}</div>
      <div className="right-box">{text}</div>
    </div>
  );
};

export default AboutBox;
