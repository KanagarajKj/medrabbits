import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import { FaPhoneAlt } from 'react-icons/fa';

const Menubar = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <img src={require('../assests/images/logo_new.png')} alt="Icon" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav
              className="ml-auto navbar-right"
              style={{
                fontSize: '130%',
                color: '#1d3557',
                fontWeight: '500',
                paddingLeft: '10px',
              }}
            >
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Physiotherapy
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Nursing Care
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Elder Care
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Dietician
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">Lab Test</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Medical Equipments 
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.7">
                  Online Doctor Video Consultation 
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.8">
                  Palliative Care
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/journey">Our Journey</Nav.Link>
              <Nav.Link href="/packages">Packages</Nav.Link>
              <Nav.Link href="/blog">Blog</Nav.Link>
              <NavDropdown title="Locations" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Pune</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Mumbai</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Bangalore(Coming Soon)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Delhi(Coming Soon)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.5">
                  Hyderabad(Coming Soon)
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.6">
                  Trivandrum(Coming Soon)
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Button href="#">
            <FaPhoneAlt />
            +91 9112266969
          </Button>
        </Container>
      </Navbar>
    </div>
  );
}

export default Menubar





