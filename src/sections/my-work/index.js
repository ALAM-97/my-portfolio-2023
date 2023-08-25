import WorkBox from "../../components/work-box";
import works from "../../works/index.json";
import "./index.scss";

const MyWork = ({ id }) => {
  return (
    <div id={id} className="my-work">
      {works.map((work) => (
        <WorkBox key={work.id} work={work} />
      ))}
    </div>
  );
};

export default MyWork;
