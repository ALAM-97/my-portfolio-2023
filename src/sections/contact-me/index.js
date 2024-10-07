import AppSection from "../../components/app-section";

const ContactMe = ({ id }) => {
  return (
    // <AppSection
    //   id={id}
    //   type="primary"
    //   title="get in touch!"
    //   text={
    //     <div>
    //       Do you have a <span>question</span>, an <span>idea</span> or a{" "}
    //       <span>project</span> you need help with?
    //     </div>
    //   }
    //   buttons
    // />
    <AppSection
      id={id}
      type="primary"
      title="Contattami!"
      text={
        <div>
          Hai una <span>domanda</span>, un'<span>idea</span> o un{" "}
          <span>progetto</span> per cui hai bisogno di aiuto?
        </div>
      }
      buttons
    />
  );
};

export default ContactMe;
