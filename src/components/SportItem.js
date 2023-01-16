import { useGlobalContext } from "../context";
const SportItem = ({ id, attributes, relationships }) => {
  const { setModalData, setShowModal } = useGlobalContext();
  const handleReadMore = () => {
    setModalData({ id, attributes, relationships });
    setShowModal(true);
  };
  return (
    <li className="sport-card">
      <div className="sport-card-section">
        {attributes.icon ? (
          <img
            className="sport-card-icon"
            src={attributes.icon}
            alt={attributes.name}
          />
        ) : null}
        <h1> {attributes.name}</h1>
        {/* <p>
          <span>Format:</span>
          <span style={{ color: "#256d85" }}> {strFormat}</span>
        </p> */}
        <p>
          <span>Description:</span> {attributes.description}
          <button onClick={handleReadMore} className="read-btn">
            ...read more
          </button>
        </p>

        <img
          className="sport-thumbnail"
          src={relationships.images.data[0]?.url}
          alt={attributes.name}
        />
      </div>
    </li>
  );
};

export default SportItem;
