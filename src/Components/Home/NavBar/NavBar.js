import React from 'react';
import { Button, Container, Dropdown, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css'

const NavBar = () => {
    return (
        <Container>
        <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand className='nav-brand-align' href="#">All Posts(32)</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        
        <Nav.Link href="#action1">Article</Nav.Link>
        <Nav.Link href="#action2">Event</Nav.Link>
        <Nav.Link href="#action2">Education</Nav.Link>
        <Nav.Link href="#action2">Job</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
      <Dropdown className='me-4'>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    Write a Post
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">Article</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Education</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Meet Up</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Job</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>
 <Button variant="primary"><i class='fa fa-user-plus'></i> <span></span> Join Group</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
</Container>
    );
};

export default NavBar;