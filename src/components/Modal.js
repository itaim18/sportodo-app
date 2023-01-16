import React from "react";
import { useGlobalContext } from "../context";
import { IoIosClose } from "react-icons/io";
const Modal = () => {
  const { modalData, showModal, setShowModal } = useGlobalContext();
  const { id, attributes, relationships } = modalData;
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
          <img
            style={{ width: "120px", margin: "auto", display: "block" }}
            src={attributes?.icon}
            alt="icon"
          />{" "}
          {attributes?.name}
        </h1>
        {/* <p>
          <span>Format:</span>
          <span style={{ color: "#256d85" }}> {strFormat}</span>
        </p> */}
        <p
          style={{
            width: "90%",
            marginLeft: "3%",
          }}
        >
          <span>Description:</span> {attributes?.description}
        </p>

        <img
          className="sport-thumbnail"
          src={relationships?.images.data[0]?.url}
          alt={attributes?.name}
        />
      </article>
    </div>
  );
};

export default Modal;
