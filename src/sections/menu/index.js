import AppLink from "../../components/app-link";
import "./index.scss";

const Menu = () => {
  return (
    <section className="menu">
      <div className="portfolio-pic">
        <img src="/assets/portfolio-pic.png" alt="Alam" />
      </div>
      <div className="links">
        <div className="link-1">
          <AppLink
            type="light"
            text="My work"
            icon={"code_blocks"}
            anchor={"my-work"}
          />
        </div>
        <div className="link-2">
          <AppLink
            type="dark"
            text="About me"
            icon={"assignment_ind"}
            anchor={"about-me"}
          />
        </div>
        <div className="link-3">
          <AppLink
            type="primary"
            text="Contact me"
            icon={"call"}
            anchor={"contact-me"}
          />
        </div>
      </div>
    </section>
  );
};

export default Menu;
