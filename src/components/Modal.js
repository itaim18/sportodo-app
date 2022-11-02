import React from "react";
import { useGlobalContext } from "../context";
import { IoIosClose } from "react-icons/io";
const Modal = () => {
  const { modalData, showModal, setShowModal } = useGlobalContext();
  const {
    strSport,
    strFormat,
    strSportThumb,
    strSportIconGreen,
    strSportDescription,
  } = modalData;
  return (
    <div className={`modal ${showModal ? "show" : null}`}>
      <article
        style={{ overflowY: "auto", overflowX: "hidden" }}
        className="sport-card-section"
      >
        <button
          onClick={() => {
            setShowModal(false);
          }}
          className="btn close-btn"
        >
          <IoIosClose />
        </button>

        <h1>
          {" "}
          <img src={strSportIconGreen} alt="icon" /> {strSport}
        </h1>
        <p>
          <span>Format:</span>
          <span style={{ color: "#256d85" }}> {strFormat}</span>
        </p>
        <p
          style={{
            width: "90%",
            marginLeft: "3%",
          }}
        >
          <span>Description:</span> {strSportDescription}
        </p>

        <img className="sport-thumbnail" src={strSportThumb} alt={strSport} />
      </article>
    </div>
  );
};

export default Modal;
