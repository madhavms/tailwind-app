import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-800">
      <ul className="flex space-x-5 mx-auto gap-11 items-center px-6 py-4">
        <li>
          <Link to="/" className="text-white text-xl font-semibold hover:text-gray-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="/About" className="text-white text-xl font-semibold hover:text-gray-300">
            About
          </Link>
        </li>
        <li>
          <Link to="/Projects" className="text-white text-xl font-semibold hover:text-gray-300">
            Projects
          </Link>
        </li>
        <li>
          <Link to="/Contact" className="text-white text-xl font-semibold hover:text-gray-300">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
