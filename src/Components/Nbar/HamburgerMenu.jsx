import React, { useState } from "react";
import Modal from "./Modal";
import "./HamburgerMenu.css";
import image from "../../assets/ModalLogo.svg";
import arrow from "../../assets/down-arrow.svg";
import hamline from "../../assets/hamburger123.svg"
function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (index) => {
    if (activeDropdown === index) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(index);
    }
  };

  return (
    <div>
      <button onClick={toggleModal} className="hamburger-button"><img src = {hamline} alt="ham" /></button>
      <Modal isOpen={isOpen} onClose={toggleModal}>
        <div id="Modallogo">
          <img src={image} alt="logoimage" className="ModalImg" />
        </div>
        <nav className="menu">
          <section className="menu">
            <div className="dropdown">
              <a href="/" className="menu-link">
                Home
              </a>
            </div>

            <div className="dropdown">
              <div>
                <button
                  className="dropdown-button"
                  onClick={() => toggleDropdown(1)}
                >
                  FITNESS
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`arrow ${activeDropdown === 1 ? "rotate1" : ""}`}
                />
              </div>
              <div
                className={`dropdown-content ${
                  activeDropdown === 1 ? "show" : ""
                }`}
              >
                <a href="/fitness">cultpass</a>
                <a href="/fitness/cultpass-elite">cultpass ELITE</a>
                <a href="/fitness/cultpass-live">cultpass Home</a>
                <a href="/fitness/cult-transform">cult Transform</a>
                <a href="/fitness/cult-bootcamp">Bootcamp</a>
                <a href="/fitness/cult-transform-plus">Transform Plus</a>
              </div>
            </div>
            <div className="dropdown">
              <div>
                <button
                  className="dropdown-button"
                  onClick={() => toggleDropdown(2)}
                >
                  CARE
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`arrow ${activeDropdown === 2 ? "rotate" : ""}`}
                />
              </div>
              <div
                className={`dropdown-content ${
                  activeDropdown === 2 ? "show" : ""
                }`}
              >
                <a href="/care/diagnostic-tests">Lab Tests</a>
              </div>
            </div>
            <div className="dropdown">
              <div>
                <button
                  className="dropdown-button"
                  onClick={() => toggleDropdown(3)}
                >
                  MIND
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`arrow ${activeDropdown === 3 ? "rotate" : ""}`}
                />
              </div>
              <div
                className={`dropdown-content ${
                  activeDropdown === 3 ? "show" : ""
                }`}
              >
                <a href="/mind/home">Mindfulness</a>
              </div>
            </div>
            <div className="dropdown">
              <div>
                <button
                  className="dropdown-button"
                  onClick={() => toggleDropdown(4)}
                >
                  STORE
                </button>
                <img
                  src={arrow}
                  alt="arrow"
                  className={`arrow ${activeDropdown === 4 ? "rotate" : ""}`}
                />
              </div>
              <div
                className={`dropdown-content ${
                  activeDropdown === 4 ? "show" : ""
                }`}
              >
                <a href="/store">cultsport</a>
              </div>
            </div>
          </section>
          <section className="menu2">
            <div className="dropdown">
              <a href="/signin" className="Extralink">
                Sign In
              </a>
            </div>
            <div className="dropdown">
              <a href="/cart" className="Extralink">
                Cart
              </a>
            </div>
            <div className="dropdown">
              <a href="/blog" className="Extralink">
                Blog
              </a>
            </div>
          </section>
        </nav>
      </Modal>
    </div>
  );
}

export default HamburgerMenu;
