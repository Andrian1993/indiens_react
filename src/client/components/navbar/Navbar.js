import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Logo from '../../img/top_logo.png';

function Greeting(props) {
  if (props.userID) {
    return (
      <React.Fragment>
        <Nav className="mr-auto" />
        <Nav>
          <Nav.Link eventKey={2} href="/myAccount">
            {' '}
            <i className="fas fa-user" />
            {' '}
{props.userName}
          </Nav.Link>
          <Nav.Link eventKey={1} href="/" onClick={props.logUserOut}>
            {' '}
            <i className="fas fa-sign-out-alt" />
            {' '}
Log Out
          </Nav.Link>
        </Nav>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Nav className="mr-auto" />
      <Nav>
        <Nav.Link eventKey={2} href="/" onClick={props.logUserIn}>
          <i className="fas fa-user" />
          {' '}
Log in
        </Nav.Link>
        <Nav.Link as={Link} to="/SignUp">
          <i className="fas fa-sign-out-alt" />
          {' '}
Sign up
        </Nav.Link>
      </Nav>
    </React.Fragment>
  );
}

function CustomNavBar(props) {
  return (
    <Navbar
      expand="md"
      collapseOnSelect
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand as={Link} to="/"><img src={Logo} alt="indiens" /></Navbar.Brand>
      <Nav.Link as={Link} to="/Project">Project</Nav.Link>
      <Nav.Link as={Link} to="/Partner">Partner</Nav.Link>
      <Nav.Link as={Link} to="/Notice">Notice</Nav.Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Greeting userID={props.userID} logUserOut={props.onLogOut} logUserIn={props.onLogIn} userName={props.userName}/>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomNavBar;
