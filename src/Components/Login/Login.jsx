// Login.jsx
import React from "react";
import Modal from "react-modal";
import "./Login.css"; // Import custom styles

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
    backgroundColor: "black",
    width: "400px",
    height: "600px",
    borderRadius: "5px",
    border: "none",
    boxShadow: "0 10px 10px rgb(0 0 0 / 0.2)",
  },
  overlay: {
    backgroundColor: "rgb(0,0,0,0.5)",
  },
};

Modal.setAppElement("#root"); // Required for accessibility

function Login({ isOpen, onRequestClose }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Login Modal"
    >
      <div className="modal-header">
        <button onClick={onRequestClose} className="close-button">
          x
        </button>
      </div>
      <div id="main">
      <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_75,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg" alt="cultlogo" className="LoginLogo"/>
      <img src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_135,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/brand-logo/cf-name-white.png" alt="logo" className="LoginLogoText" />
      <button></button>
        <div id="policy">
          * By Continuing you agree to the <a href>Terms of Services</a> and{" "}
          <a href> Privacy policy</a>.
        </div>
      </div>
    </Modal>
  );
}

export default Login;
