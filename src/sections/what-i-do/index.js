import AppSection from "../../components/app-section";

const WhatIDo = ({ id }) => {
  return (
    // <AppSection
    //   id={id}
    //   type="dark"
    //   title="What I do"
    //   buttons={false}
    //   text={
    //     <div>
    //       I provide clients with <span>solid</span> web solutions, developed
    //       with <span>love</span> & <span>dedication</span>.
    //     </div>
    //   }
    // />
    <AppSection
      id={id}
      type="dark"
      title="Di cosa mi occupo"
      buttons={false}
      text={
        <div>
          Offro ai miei clienti soluzioni web <span>solide</span>, sviluppate
          con <span>amore</span> e <span>dedizione</span>.
        </div>
      }
    />
  );
};

export default WhatIDo;
