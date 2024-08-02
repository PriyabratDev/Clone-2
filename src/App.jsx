import React, { useState } from "react";
import "./App.css";
import Nbar from "./Components/Nbar/Nbar";


import Hpage from "./Components/Homepage/homepage";
import Socials from "./Components/Socials/Socials";
import Footer from "./Components/Footer/Footer";

function App() {

  const [page, setPage] = useState('home');
  return <>
  <Nbar setPage={setPage}/>
      <div>
        {page === 'home' && <Hpage />}
        {/* // {page === 'care' && <Care />}
        // {page === 'store' && <Store />} */}
        
        </div>
      <br id="break"/>
      <Socials />
      <Footer />
      </>;
}

export default App;
