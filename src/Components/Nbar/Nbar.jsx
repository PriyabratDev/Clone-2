import "./Nbar.css";

import HamburgerMenu from "./HamburgerMenu";
function Nbar() {
  return (
    <div>
      <div id="navbar">
        <div id="logo">
          <a href="/">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_120,ar_3.87,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/vman-and-white-cult-text.png"
              alt=""
            />
          </a>
        </div>
        <div>
          <div id="navpages">
            <div>
              <a
                href="/fitness"
                onClick={() => setPage("fitness")}
                className="navLinks"
              >
                FITNESS
              </a>
            </div>
            <div>
              <a
                href="/care"
                onClick={() => setPage("care")}
                className="navLinks"
              >
                CARE
              </a>
            </div>
            <div>
              <a
                href="/mind"
                onClick={() => setPage("mind")}
                className="navLinks"
              >
                MIND
              </a>
            </div>
            <div>
              <a
                href="/store"
                onClick={() => setPage("store")}
                className="navLinks"
              >
                STORE
              </a>
            </div>
          </div>
          <div id="buttons">
            <div id="loc-div">
              <div id="place">
                <input
                  id="loc-text"
                  type="text"
                  defaultValue="BHUBANESWAR"
                  disabled
                />
              </div>
              <div id="loc-img">
                <img
                  onclick
                  src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                  alt=""
                />
              </div>
            </div>
            <div id="app-div">
              <button id="app">
                <a href="https://play.google.com/store/apps/details?id=fit.cure.android">
                  GET APP
                </a>
              </button>
            </div>
            <div id="login-div" onclick={console.log("1")}></div>
            <div id="cart-div" onClick={console.log("2")}></div>
          </div>
        </div>
      </div>

      <div id="Resnavbar">
        <div id="menu">
          <HamburgerMenu />
        </div>
        <a href="/" className="logo">
          <div className="logo">
            <img
              src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_35,q_auto:eco,dpr_2,f_auto,fl_progressive//image/test/brand-logo/curefit-logo-white.svg"
              alt="logo"
              className="logoImg"
            />
          </div>
        </a>
        <div id="ResPlace">BHUBANESWAR</div>
      </div>

      {/* <div>
        <div id="navpages">
          <div>
            <a href="/fitness" className="navLinks">
              FITNESS
            </a>
          </div>
          <div>
            <a href="/care" className="navLinks">
              CARE
            </a>
          </div>
          <div>
            <a href="/mind" className="navLinks">
              MIND
            </a>
          </div>
          <div>
            <a href="/store" className="navLinks">
              STORE
            </a>
          </div>
        </div>

        <div id="buttons">
          <div id="loc-div">
            <div id="place">
              <input
                id="loc-text"
                type="text"
                defaultValue="BHUBANESWAR"
                disabled
              />
            </div>
            <div id="loc-img">
              <img
                onclick
                src="https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_26,ar_1,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/header/location.png"
                alt=""
              />
            </div>
          </div>
          <div id="app-div">
            <button id="app">
              <a href="https://play.google.com/store/apps/details?id=fit.cure.android">
                GET APP
              </a>
            </button>
          </div>
          <div id="login-div" onclick={console.log("1")}></div>
          <div id="cart-div" onClick={console.log("2")}></div>
        </div> 
      </div> */}
    </div>
  );
}
export default Nbar;
