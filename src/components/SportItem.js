import React from "react";

const SportItem = ({
  strSport,
  strFormat,
  strSportThumb,
  strSportIconGreen,
  strSportDescription,
}) => {
  return (
    <li className="sport-card">
      <div className="sport-card-section">
        <h1>
          <img src={strSportIconGreen} alt={strSport} /> {strSport}
        </h1>
        <p>
          <span>Format:</span>
          <span style={{ color: "#256d85" }}> {strFormat}</span>
        </p>
        <p>
          <span>Description:</span> {strSportDescription.slice(0, 150)}
          <button className="read-btn">...read more</button>
        </p>

        <img className="sport-thumbnail" src={strSportThumb} alt={strSport} />
      </div>
    </li>
  );
};

export default SportItem;
