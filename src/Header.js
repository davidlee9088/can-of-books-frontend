import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light" variant="primary">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/About" className="nav-link">About</Link></NavItem>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
