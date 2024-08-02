import React, { useState, useEffect } from "react";
// import Navbar from "../Navbar/Navbar";

import ImageSlider from "../src/Care/ImageSlider";
import { SliderData } from "../src/Care/SliderData";
import Specialities from "../src/Care/Specialities";
import "../src/Care/Care.scss";
import SuperSpecialists from "../src/Care/SuperSpecialists";
import Experts from "../src/Care/Experts";
import FrequntlyAskedQue from "../src/Care/FrequntlyAskedQue";
import DoctorsInfo from "../src/Care/DoctorsInfo";
// import { Footer } from "../index";
import Timer from "../src/Care/Timer";

const Care = () => {
  const [loading__Status, setLoading__Status] = useState(true);

  useEffect(() => {
    let setIntervalId = setInterval(() => {
      setLoading__Status(false);
    }, 2000);

    return () => {
      clearInterval(setIntervalId);
    };
  }, []);

  return loading__Status ? (
    <div className="loading__Screen">
      {" "}
      <img
        src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,q_auto:eco,dpr_1.0700000524520874,f_auto,fl_progressive//image/loader_compressed-v3.gif"
        alt="loading-gif"
      />
    </div>
  ) : (
    <div className="care_page">
      <Navbar path="care" />
      <div className="care-body" style={{}}>
        <div className="storeNav">
          {" "}
          <n>Online Consult</n>
          <div>Lab Tests</div>
        </div>

        {/* Start coding from here */}
        <ImageSlider slides={SliderData} />
        <Timer />
        <div className="careBody">
          <Specialities />
          <SuperSpecialists />
          {/* <Experts /> */}

          {/* quick links start */}

          <div className="quicklinks">
            <div className="quicklinks__heading">
              <h1>Quick Links</h1>
            </div>
            <div className="quicklinks__link">
              <a href="#">Help & Support</a>
              <hr className="quicklinks__hori" />
              <a href="#">Terms & Conditions</a>
              <hr className="quicklinks__hori" />
            </div>
          </div>

          <FrequntlyAskedQue />
          <DoctorsInfo />
        </div>
      </div>
      <Footer />
      {/* quick links end */}
    </div>
  );
};

export default Care;
