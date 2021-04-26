import getRandomTab from "../utils/getRandomTab";

const Job = ({ title, contractType, country, city }) => {
  const randomColors = ["ef476f", "ffd166", "06d6a0", "118ab2", "073b4c"];
  return (
    <div
      className="cadre"
      style={{
        borderColor: `#${getRandomTab(randomColors)}`,
      }}
    >
      <h3>{title}</h3>
      <span>
        {contractType} - {country} - {city}
      </span>
    </div>
  );
};
export default Job;
