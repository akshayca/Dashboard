import React, { Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css"

export default class Navibar extends Component {

  render() {
    return (
      
      <Navbar bg="warning" expand="lg" variant="light">
        <Container>
        <Navbar.Brand href="/"><h4>Automation Test Dashboard</h4></Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="project_1">PROJECT 1</Nav.Link>
              <Nav.Link href="#">PROJECT 2</Nav.Link>
              <Nav.Link href="#">UI testing</Nav.Link>
              <Nav.Link href="#">API testing</Nav.Link>
              <Nav.Link href="#">Performance Testing</Nav.Link>
              <NavDropdown title="Load Test" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Load Test 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Load Test 2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Navbar.Text>
              <h5>Link to <a href="#" target="_blank" rel="noreferrer">Allure Report</a></h5>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}