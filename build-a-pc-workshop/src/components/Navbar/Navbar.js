import React from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav  } from 'reactstrap';

export default class Navigation extends React.Component {

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar className="navbar-inverse" light>
          <NavbarBrand href="/" className="mr-auto brand">BAPC Workshop</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <li className={window.location.pathname === "/buy" || window.location.pathname === "/home" ? "" : ""}>
                <Link to="/buy">Buy</Link>
              </li>
              <li className={window.location.pathname === "/explore" || window.location.pathname === "/home" ? "" : ""}>
                <Link to="/explore">Explore</Link>
              </li>
              <li className={window.location.pathname === "/list" || window.location.pathname === "/home" ? "" : ""}>
                <Link to="/list">List</Link>
              </li>
              <li className={window.location.pathname === "/about" || window.location.pathname === "/home" ? "" : ""}>
                <Link to="/about">About</Link>
              </li>
              <li href="https://github.com/chrisobo98">
                <Link to="/https://github.com/chrisobo98">Github</Link>
              </li>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
