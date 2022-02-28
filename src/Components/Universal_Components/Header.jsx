import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../Image/logo-three-1.png";

const Header = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fixed-top" >
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navControl">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={'/'}>Home</Nav.Link>
            <Nav.Link as={Link} to={'/about'}>About</Nav.Link>
            <Nav.Link as={Link} to={'/blog'}>Blog</Nav.Link>
            <NavDropdown
              title="Page"
              id="collasible-nav-dropdown"
              className=""
            >
              <NavDropdown.Item as={Link} to={'/single-blog'}>Single Blog</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/services'}>Services</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/pricing'}>Pricing</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/team'}>Team</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/faq'}>Faq</NavDropdown.Item>
              <NavDropdown.Item as={Link} to={'/portfolio'}>Portfolio</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
          <Link className="theme-primary-bg my-btn-primary ms-5">
            Sign Up Free
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
