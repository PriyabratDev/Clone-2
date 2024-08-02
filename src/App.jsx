import React, { useState } from "react";
import "./App.css";
import Nbar from "./Components/Nbar/Nbar";
// import Care from './Components/Care/Care';
// import Store from './Components/Store/Care';
import Socials from "./Components/Socials/Socials";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Nbar />
      {/* <div
        {page === 'home' && <Home />}
        {page === 'care' && <Care />}
        {page === 'store' && <Store />}
      </div> */}
      <br/>
      {/* <Socials />
      <Footer /> */}
    </>
  );
}

export default App;
