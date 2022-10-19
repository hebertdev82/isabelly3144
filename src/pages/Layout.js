import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import '../Styles.css';

const Layout = () => {

  const [isActive, setActive] = useState("false");

  const ToggleClass = () => {
    setActive(!isActive);
  };
  
  return (
    <>
      <header>
        <div id="brand">
          <img src="symbol.png" alt="symbol" />
        </div>
        <nav>
          <ul>
            <li className="button"><Link to="/">Home</Link></li>
            <li className="button"><Link to="/About">About</Link></li>
            <li className="button"><Link to="/Works">Works</Link></li>
            <li className="button"><Link to="/Contact">Contact</Link></li>
          </ul>
        </nav>

        { /* Mobile */}
          <div id="hamburger-icon" onClick={ToggleClass} className={isActive ? "" : "open"}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <ul class="mobile-menu">
              <li className="button"><Link to="/">Home</Link></li>
              <li className="button"><Link to="/About">About</Link></li>
              <li className="button"><Link to="/Works">Works</Link></li>
              <li className="button"><Link to="/Contact">Contact</Link></li>
            </ul>
          </div>
      </header>
      <Outlet />
    </>
  )
};

export default Layout;