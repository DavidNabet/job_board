import Job from "./Job";
import jobList from "../joblist.json";

const Jobs = () => {
  return (
    <div className="container">
      {jobList.map((props) => (
        <Job key={props.id} {...props} />
      ))}
    </div>
  );
};
export default Jobs;
