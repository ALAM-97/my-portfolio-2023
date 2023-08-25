import AppSection from "../../components/app-section";

const WhatIDo = ({ id }) => {
  return (
    <AppSection
      id={id}
      type="dark"
      title="What I do"
      buttons={false}
      text={
        <div>
          I provide clients with <span>solid</span> web solutions, developed
          with <span>love</span> & <span>dedication</span>.
        </div>
      }
    />
  );
};

export default WhatIDo;
