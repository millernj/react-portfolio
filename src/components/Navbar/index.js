import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import './style.css';

function NavLink({ children, pathname }) {
  return (
    <Link
      to={pathname}
      className={
        window.location.pathname === pathname
          ? 'nav-link active'
          : 'nav-link'
      }
    >
      {children}
    </Link>
  )
}

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <Container className="bg-light" fluid>
      <Container>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link className="navbar-brand page-name-heading" to="/">
            Noah Miller
          </Link>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink pathname="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink pathname="/contact">
                  Contact Me
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink pathname="/portfolio">
                  Portfolio
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </Container>
  );
}

export default Navbar;
