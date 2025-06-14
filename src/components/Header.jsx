import React, { useState, useRef, useEffect } from "react";
import "./Header.scss";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <img src="/images/logo.png" alt="ProVital Logo" />
          <span>ProVital</span>
        </div>
        <nav>
          <a href="#">List your practice</a>
          <span className="divider" />
          <a href="#">For Employers</a>
          <span className="divider" />
          <a href="#">Courses</a>
          <span className="divider" />
          <a href="#">Books</a>
          <span className="divider" />
          <a href="#">Speakers</a>
          <span className="divider" />
          <a href="#">Doctors</a>
          <span className="divider" />
          <div
            className="dropdown"
            ref={dropdownRef}
          >
            <button
              className="dropdown-toggle"
              onClick={() => setDropdownOpen((open) => !open)}
            >
              Login / Signup <span className="arrow">&#9662;</span>
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-row">
                  <span>Doctor</span>
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
                <div className="dropdown-row">
                  <span>Patients</span>
                  <a href="#">Login</a>
                  <a href="#">Sign up</a>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
