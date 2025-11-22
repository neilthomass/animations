import { useState } from 'react';
import './Dropdown.css';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMenuClick = (action) => {
    console.log(`Menu item clicked: ${action}`);
    setIsOpen(false);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        <span className="menu-icon">☰</span>
      </button>

      {isOpen && (
        <div className="dropdown-menu">
          <button className="dropdown-item" onClick={() => handleMenuClick('about')}>
            About
          </button>
          <button className="dropdown-item" onClick={() => handleMenuClick('settings')}>
            Settings
          </button>
          <button className="dropdown-item" onClick={() => handleMenuClick('github')}>
            GitHub
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
