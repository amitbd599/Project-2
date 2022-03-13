import React from "react";
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { StickyNav } from 'react-js-stickynav'
import 'react-js-stickynav/dist/index.css'
import { Link } from "react-router-dom";
import logo from "../../Image/logo-three-1.png";

const Header = () => {
  const style = () => {
    return (
      <style jsx>{`
        .nav {
          transition: all 0.5s linear;
          position: fixed;
          z-index: 2000;
          padding: 48px;
          width: 100%;
        }
        .scrollNav {
          transition: all 0.2s linear;
          z-index: 2000;
          background: #fff;
          width: 100%;
          box-shadow: 0px 10px 20px 0px rgb(79 35 35 / 8%);
        }
        .styl {
          padding-top: 80px;
        }
      `}</style>
    )
  }
  return (
    
    <div>
      {style()}
      {/* <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className="fixed-top" >
       <Container>
         <Navbar.Brand as={Link} to={'/'}>
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
            <Nav.Link as={Link} to={'/contact'}>Contact</Nav.Link>
          </Nav>
          <Link className="theme-primary-bg my-btn-primary ms-5">
            Sign Up Free
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
<br />
<br />
<br />
<br /> */}
<StickyNav length='40'>
      <Container className="fixed-top">
      <div class="stellarnav">
        <a href="/" className="logo">
          <img src={logo} alt="" />
        </a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>

          <li class="">
            <a >Page</a>
            <ul className="dropdown">
              <li>
                <a href="/single-page">Single Blog</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/Pricing">Pricing</a>
              </li>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/faq">Faq</a>
              </li>
              <li>
                <a href="/portfolio">Portfolio</a>
              </li>
              <li>
                <a href="/abc">404 Page</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <Link className="theme-primary-bg my-btn-primary ms-5">
          Sign Up Free
        </Link>
        </ul>
       
      </div>
      </Container>
      </StickyNav>
    </div>
  );
};

export default Header;
