import AppSection from "../../components/app-section";

const ContactMe = ({ id }) => {
  return (
    <AppSection
      id={id}
      type="primary"
      title="get in touch!"
      text={
        <div>
          Do you have a <span>question</span>, an <span>idea</span> or a{" "}
          <span>project</span> you need help with?
        </div>
      }
      buttons
    />
  );
};

export default ContactMe;
