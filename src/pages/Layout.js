import { Outlet, Link } from "react-router-dom";
import '../Styles.css';

const Layout = () => {
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
      </header>
      <Outlet />
    </>
  )
};

export default Layout;