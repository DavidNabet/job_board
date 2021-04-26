import getRandomInt from "../utils/getRandomInt";

const Job = ({ title, contractType, country, city }) => {
  const randomColors = {
    red: "ef476f",
    yellow: "ffd166",
    green: "06d6a0",
    blueSky: "118ab2",
    blue: "073b4c",
  };
  return (
    <div
      className="cadre"
      style={{
        borderColor: `#${
          Object.values(randomColors)[getRandomInt(randomColors)]
        }`,
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
