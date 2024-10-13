import { Link } from "react-router-dom";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-bar">
      <ul className="nav-ulist">
        <li>
          <Link to="/user">User</Link>
        </li>
        <li>
          <Link to="/admin-login">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
