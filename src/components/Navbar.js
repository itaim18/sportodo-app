import logo from "../images/logo-sports.png";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
const Navbar = () => {
  const { isSubmenu, setIsSubmenu } = useGlobalContext();
  const handleToggle = () => {
    setIsSubmenu(!isSubmenu);
  };
  return (
    <nav className="navbar">
      <div className="navbar-center">
        <div className="nav-header">
          <a href="#sports">
            <img src={logo} alt="logo sports" className="logo" />
          </a>
          <button onClick={handleToggle} className="btn toggle-btn">
            <FaBars />
          </button>
        </div>
      </div>
      <ul className="navbar-links">
        <li>
          <a className="link-btn" href="#about">
            about
          </a>
        </li>
        <li>
          <a className="link-btn" href="#sports">
            sports
          </a>
        </li>
        <li>
          <a className="link-btn" href="#contact">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
