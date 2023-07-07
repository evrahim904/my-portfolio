import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="relative navbar flex justify-evenly text-white">
      <button className="absolute me-80 md:hidden" onClick={handleMobileMenuToggle}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul
        className={`${
          isMobileMenuOpen ? 'nav-link-mobile' : 'nav-link'
        } md:flex gap-5 md:list-none sm:list-disc hidden sm:flex`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#about-me">About me</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <Link to="/projects">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
