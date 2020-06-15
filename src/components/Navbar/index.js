import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import './style.css';

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
                <Link
                  to="/"
                  className={
                    window.location.pathname === '/'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={
                    window.location.pathname === '/contact'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/portfolio"
                  className={
                    window.location.pathname === '/portfolio'
                      ? 'nav-link active'
                      : 'nav-link'
                  }
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </Container>
  );
}

export default Navbar;
