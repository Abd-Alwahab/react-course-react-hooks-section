import React, { useState } from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#modal");

function HookState() {
  const [error, setError] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <button onClick={openModal}>Open</button>
      <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal}>
        <button onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}

export default HookState;
