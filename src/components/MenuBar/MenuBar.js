import React from 'react';
import { Container, Nav, Navbar, Stack } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MenuBar = () => {
    const activeStyle ={
                    fontWeight: "bold",
                    color: "red"
                }
    return (
        <Navbar bg="" expand="lg" variant="light">
  <Container >
    {/* logo */}
    <Navbar.Brand href="#" ><i className="text-success fw-bolder">Mentor<span className="text-warning">IT</span></i></Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      {/* nav item start */}
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Stack direction="horizontal" gap={3}>
            <NavLink activeStyle={activeStyle} to="/home">Home</NavLink>  
            <NavLink activeStyle={activeStyle} to="/about">About</NavLink>  
            <NavLink activeStyle={activeStyle} to="/services">Services</NavLink>  
            <NavLink activeStyle={activeStyle} to="/mentors">Mentors</NavLink>  
            <NavLink activeStyle={activeStyle} to="/contact">Contact</NavLink>  
        </Stack>
        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
};

export default MenuBar;