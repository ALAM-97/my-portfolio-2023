import "./index.scss";

const Header = () => {
  return (
    <header>
      <div>
        <img
          className="logo"
          src="/assets/alam-logo-light.svg"
          alt="Alam Logo"
        />
        <img
          className="text"
          src="/assets/alam-logo-text.svg"
          alt="Alam Logo Text"
        />
      </div>
    </header>
  );
};

export default Header;
