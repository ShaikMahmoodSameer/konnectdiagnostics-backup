import React, { useState } from "react";
import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

const Navbar = ({ cartSize }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Wrapper>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="navbar-header">
            <button
              type="button"
              className={`navbar-toggle ${isMobileMenuOpen ? "active" : ""}`}
              onClick={toggleMobileMenu}
            >
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <ul className={`navbar-lists navbar-nav ${isMobileMenuOpen ? "mobile-menu-open" : ""}`}>
            <li>
              <NavLink to="/tests" className="nav-list" onClick={() => setIsMobileMenuOpen(false)} data-bs-toggle="tooltip" title="All the Tests are listed here!">
                Tests
              </NavLink>
            </li>
            <li className="services">
              <NavLink to="#" className="nav-list">
                Services
              </NavLink>
              <ul className="subMenu">
                {/* <li className="subMenuItem">
                  <NavLink to="/health-conditions" className="sub-nav-list">
                    Health Conditions
                  </NavLink>
                </li> */}
                <li className="subMenuItem">
                  <NavLink to="/radiology-services" className="sub-nav-list">
                    Radiology Services
                  </NavLink>
                </li>
                <li className="subMenuItem">
                  <NavLink to="/fetal-medicine-unit" className="sub-nav-list">
                    Fetal Medicine Unit
                  </NavLink>
                </li>
              </ul>
            </li>
            
            <li>
              <NavLink to="/health-conditions" className="nav-list">
                Health Conditions
              </NavLink>
            </li>
            <li>
              <NavLink to="/packages" className="nav-list">
                Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/nearest-centers" className="nav-list">
                Nearest Centers
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="nav-list">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/partner-with-us" className="nav-list">
                Partner With Us
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact-us" className="nav-list">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Wrapper>
  );
};

export default Navbar;

const Wrapper = styled.section`
  navbar {
   background-color: #fff;
 }
 .container {
   padding: 10px 20px;
 }
 .navbar-lists {
   list-style: none;
   display: flex;
   align-items: center;
   margin: 0;
   padding: 0;
 }
 .nav-list {
   color: black;
   font-weight: 700;
   font-size: 16px;
   text-decoration: none;
   padding: 10px 10px;
   transition: color 0.3s ease;
 }

 /* Hover effect for navigation items */
 .nav-list:hover {
   color: ${({ theme }) => theme.colors.primary};
 }

  /* Style for the hamburger menu button */
  .navbar-toggle {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 15px;
    display: none; /* Hide by default for larger screens */
  }

  .icon-bar {
    background-color: #333;
    height: 3px;
    width: 25px;
    margin: 5px 0;
    display: block;
  }

  .navbar-toggle {
  display: none;
}

/* Display the regular navigation list for larger screens */
.navbar-lists {
  flex-direction: row;
  justify-content: flex-start;
}

/* Reset styles for the mobile menu on larger screens */
.mobile-menu-open {
  display: none;
}

/* Reset styles for the mobile menu button on larger screens */
.active .icon-bar {
  opacity: 1;
  transform: none;
  top: 0;
}

/* Reset styles for submenu on larger screens */
.subMenu {
  position: absolute;
  display: none;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Reset styles for submenu items on larger screens */
.sub-nav-list {
  padding: 10px 15px;
}

/* Display submenu on parent item hover for larger screens */
.services:hover .subMenu {
  display: block;
}
 /* Style for submenu items */
 .subMenu {
   list-style: none;
   margin: 0;
   padding: 0;
   position: absolute;
   display: none; /* Hide submenu by default */
   background-color: #fff;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
 }
 .subMenuItem {
   position: relative;
 }
 .sub-nav-list {
   display: block;
   color: #333;
   text-decoration: none;
   padding: 10px 15px;
   transition: background-color 0.3s ease;
 }
 /* Hover effect for submenu items */
 .sub-nav-list:hover {
   background-color: #f2f2f2; /* Change background color on hover */
 }
 /* Show submenu on parent item hover */
 .services:hover .subMenu {
   display: block;
 }



  /* Mobile menu styles */
  @media (max-width: 768px) {
    .navbar-lists {
      flex-direction: column;
      width: 100%;
      text-align: center;
      display: none;
      position: absolute;
      top: 60px;
      left: 0;
      background-color: #fff;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .nav-list {
      padding: 15px;
    }

    .navbar-toggle {
      display: block;
    }

    .active .icon-bar:nth-child(2) {
      opacity: 0;
    }

    .active .icon-bar:nth-child(1),
    .active .icon-bar:nth-child(3) {
      transform: rotate(-45deg);
      top: 10px;
    }

    .active .icon-bar:nth-child(1) {
      transform: rotate(-45deg) translate(-5px, 6px);
    }

    .active .icon-bar:nth-child(3) {
      transform: rotate(45deg) translate(-5px, -6px);
    }

    /* Show mobile menu when the button is clicked */
    .mobile-menu-open {
      display: flex;
    }

    .subMenu {
      position: static;
      box-shadow: none;
      background-color: transparent;
    }

    .sub-nav-list {
      padding: 15px;
    }
  }

  /* Add your existing styles here */
`;
