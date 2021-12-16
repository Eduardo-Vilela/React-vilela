import React from "react";
import { Navbar, Container , Nav   } from "react-bootstrap"
import CardWidget from "../CardWidget/CardWidget";
import '../NavBar/style.css'
const NavBar = () => {
  return (
        <header className="NavBar">
            <div>
            <Navbar bg="success" variant="dark" className="colorBarra">
                <Container>
                <Navbar.Brand href="#home" className="fontMarca">THIALE Indumentaria </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link href="#home">Inicio</Nav.Link>
                  <Nav.Link href="#features">Productos</Nav.Link>
                  <Nav.Link href="#pricing">Ayuda</Nav.Link>
                </Nav>
                <CardWidget/>
                </Container>
            </Navbar>
            </div>
        </header>
  );
};

export default NavBar;