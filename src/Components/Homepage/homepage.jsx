import React, { useRef, useEffect } from "react";
import video from '../../assets/video.mp4';
import elitePhoto from '../../assets/cult-pass-elite-partial.png';
import prophoto from '../../assets/cult-pass-pro-partial.png';
import icpImage from '../../assets/icp_cg.png';
import icp1Image from '../../assets/icp_cl.png';
import icp2Image from '../../assets/icp_cb.png';
import scale from '../../assets/cult-transform-glass-green.webp';
import scale2 from '../../assets/glass.png';
import scale3 from '../../assets/glass-workout-gear.png';
import scale4 from '../../assets/sugar-fit-glass-purple.png';
import a1 from '../../assets/3rd.png';
import b1 from '../../assets/career.webp';
import tile_1 from '../../assets/tile-1.png';
import tile_2 from '../../assets/tile-2.png';
import tile_3 from '../../assets/tile-3.png';
import tile_4 from '../../assets/tile-4.png';
import tile_5 from '../../assets/tile-5.png';
import tile_6 from '../../assets/tile-6.png';
import tile_7 from '../../assets/tile-7.png';
import tile_8 from '../../assets/tile-8.png';
import a from '../../assets/image_zoom_widget_img_1.png'
import b from '../../assets/image_zoom_widget_img_2.png'
import c from '../../assets/image_zoom_widget_img_3.png'
import e from '../../assets/image_zoom_widget_img_5.png'
import z from '../../assets/text-only-v2.png';
import "./homepage.css";
import first from '../../assets/1st.webp'
function Hpage() {
  const innRefs = useRef([]);
  const slideInRefs = useRef([]);

  useEffect(() => {
    const appearOptions = {
      threshold: 0.1,
    };

    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          appearOnScroll.unobserve(entry.target); 
        }
      });
    }, appearOptions);

    innRefs.current.forEach((inn) => {
      if (inn) {
        appearOnScroll.observe(inn);
      }
    });

    slideInRefs.current.forEach((slider) => {
      if (slider) {
        appearOnScroll.observe(slider);
      }
    });

    return () => appearOnScroll.disconnect();
  }, []);

  return (
    <div className="Home-main">
     <div className="video-container">
      <video width="100%" height="100%" autoPlay loop muted>
        <source src={video} type="video/mp4" />
        <source src={first} type="image/webp" />
        <div className="video-overlay"></div>
      </video>
      <img src={first} alt="Overlay Image" className="video-image-overlay" />
    <h2 className="arya">A fitness movement that is worth <br/>breaking a sweat for</h2>
    <button className="lo">EXPLORE CULTPASS</button>
    <div className="v"></div>
    <div className="q">
           
          </div>

    </div>

      <div className="container">
        <div className="x">
          <h2>cultpass</h2>
          <img src={elitePhoto} alt="cult-pass-elite-partial" />
          <p>Unlimited access to group classes,</p>
          all gyms and at-home workouts
        </div>
        <div className="x">
          <h2>cultpass</h2>
          <img src={prophoto} alt="cult-pass-pro-partial" />
          <p>Unlimited access to all PRO gyms,</p>
          at-home workouts
        </div>
        <div className="x">
          <h2>cultpass</h2>
          <img src={elitePhoto} alt="cult-pass-elite-partial" />
          <p>Unlimited access to single center,</p>
          at-home workouts
        </div>
      </div>

<h3 className="i">cultpass</h3>
      <h1 className="overlay-text ">one membership for all your fitness needs</h1>
      <div className="last1 ">
      
        <div className="inn slide-in-up from-bottom" style={{ backgroundImage: `url(${a})` }} ref={el => innRefs.current[0] = el}>
          
        </div>
        <div className="inn slide-in-up from-bottom" ></div>
        <div className="inn slide-in-up from-bottom" style={{ backgroundImage: `url(${b})` }} ref={el => innRefs.current[2] = el}></div>
        <div className="inn slide-in-up from-bottom" ></div>
        <div className="inn slide-in-up from-bottom" style={{ backgroundImage: `url(${c})` }} ref={el => innRefs.current[4] = el}></div>
        <div className="inn slide-in-up from-bottom" ></div>
        
        <div className="inn slide-in-up from-bottom" style={{ backgroundImage: `url(${a})` }} ref={el => innRefs.current[6] = el}></div>
        <div className="inn slide-in-up from-bottom" ></div>
       
        <div className="inn slide-in-up from-bottom" style={{ backgroundImage: `url(${e})` }} ref={el => innRefs.current[8] = el}></div>
      </div>
      <div className="inn slide-in-up from-bottom" ></div>
      <div className="inn slide-in-up from-bottom" ></div>
      
     < h1 className="overlay-text1" style={{}}>Fun,trainer led group classes</h1>
    <div>               <br/>      <br/>      </div>
      <div className="last3">
      
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_1})` }} ref={el => innRefs.current[0] = el}></div>
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_2})` }} ref={el => innRefs.current[1] = el}></div>
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_3})` }} ref={el => innRefs.current[2] = el}></div>
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_4})` }} ref={el => innRefs.current[3] = el}></div>
  
      </div>
      <div className="last3">
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_5})` }} ref={el => innRefs.current[0] = el}></div>
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_6})` }} ref={el => innRefs.current[1] = el}></div>
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_7})` }} ref={el => innRefs.current[2] = el}></div>
        <div className="inn1 slide-in-up from-bottom" style={{ backgroundImage: `url(${tile_8})` }} ref={el => innRefs.current[3] = el}></div>
        
      </div>
      
      
      <div className="q">
        <h2>cultpass</h2>
        <button className="learn-more-button">Learn More</button>
      </div>

      <div className="container">
        <div className="z">
          <h2>cultpass</h2>
          <img src={icpImage} alt="icp_cg.png" />
          <img src={elitePhoto} alt="cult-pass-elite-partial" />
        </div>
        <div className="z">
          <h2>cultpass</h2>
          <img src={icp2Image} alt="icp_cb.png" />
          <img src={prophoto} alt="cult-pass-pro-partial" />
        </div>
        <div className="z">
          <h2>cultpass</h2>
          <img src={icp1Image} alt="icp_cl.png" />
          <img src={prophoto} alt="cult-pass-pro-partial" />
        </div>
      </div>

      <div className="container">
        <div className="z">
          <ul>
            Unlimited access to
            <li>At-center group classes</li>
            <li>All ELITE & PRO gyms</li>
            <li>At-home live workouts</li>
          </ul>
          <div className="button-group">
            <button className="try-button">TRY FOR FREE</button>
            <button className="buy-button">LEARN MORE</button>
          </div>
        </div>
        <div className="z">
          <ul>
            Unlimited access to
            <li>All PRO gyms</li>
            <li>2 Sessions/month at ELITE gyms & group classes</li>
            <li>At-home live workouts</li>
          </ul>
          <div className="button-group">
            <button className="try-button">TRY FOR FREE</button>
            <button className="buy-button">LEARN MORE</button>
          </div>
        </div>
        <div className="z">
          <ul>
            Unlimited access to
            <li>At home workouts</li>
            <li>Celebrities Workouts</li>
            <li>Goal-based Workouts and Meditation Session</li>
          </ul>
          <div className="button-group">
            <button className="try-button">TRY FOR FREE</button>
            <button className="buy-button">LEARN MORE</button>
          </div>
        </div>
      </div>

      <div className="x3">
        <div style={{ backgroundImage: `url(${scale})` }} className="x2">
          <h2>cult transformation</h2>
          Get coached to lose weight for good
        </div>
        <div style={{ backgroundImage: `url(${scale2})` }} className="x2">
          <h3>The .fit way</h3>
          Making health easy, one day at a time
        </div>
      </div>

      <div className="x3">
        <div style={{ backgroundImage: `url(${scale3})` }} className="x2">
          <h2>Workout Gear</h2>
          Everything you need for your workout
        </div>
        <div style={{ backgroundImage: `url(${scale4})` }} className="x2">
          <h3>Sugar.fit</h3>
          Reverse Type 2 Diabetes and Prediabetes
        </div>
      </div>

      <div style={{ backgroundImage: `url(${a1})` }} className="x4">
        <div className="x2">
          <h3>Download the most loved<br />fitness app</h3>
          <h3></h3>
          Start your fitness journey with us. Join the cult
        </div>
      </div>

      <div className="x3">
        <div className="m" style={{ backgroundImage: `url(${b1})` }}>
          <h2 className="h3">Careers at Cult</h2>
          <div className="q">
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
        <div className="m" >
          <h2 className="h4">cult.fit franchise<br/>opportunities</h2>
         <p className="h3"> Partner with the largest fitness brand in India</p>
          <div className="q">
            <button className="learn-more-button">Learn More</button>
          </div>
        </div>
        
        
      </div>
      <div className="moni">
      <div style={{ backgroundImage: "url(https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_1000,q_auto:eco,dpr_1,f_auto,fl_progressive//image/test/we_are_cult_new.svg)" }} className="exit">
      <h2 className="rin">At cult.fit, we make group workouts fun, daily food<br/> healthy & tasty, mental fitness easy with yoga &<br/> meditation, and medical & lifestyle care hassle-free.<br/>
      #BeBetterEveryDay</h2></div>
      </div>
     
    </div>
  );
}

export default Hpage;
