import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = props => (
  <Navbar bg='primary' expand='lg' variant='dark'>
    <Navbar.Brand href='/'>Image Gallery App</Navbar.Brand>
    <Navbar.Toggle aria-controls='basic-navbar-nav' />
    <Navbar.Collapse id='basic-navbar-nav'>
      <Nav className='mr-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
