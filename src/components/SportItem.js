import { useGlobalContext } from "../context";
const SportItem = ({
  idSport,
  strSport,
  strFormat,
  strSportThumb,
  strSportIconGreen,
  strSportDescription,
}) => {
  const { setModalData, setShowModal } = useGlobalContext();
  const handleReadMore = () => {
    setModalData({
      strSport,
      strFormat,
      strSportThumb,
      strSportIconGreen,
      strSportDescription,
    });
    setShowModal(true);
  };
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
          <button onClick={handleReadMore} className="read-btn">
            ...read more
          </button>
        </p>

        <img className="sport-thumbnail" src={strSportThumb} alt={strSport} />
      </div>
    </li>
  );
};

export default SportItem;
