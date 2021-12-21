import React from "react";
import { Navbar, Container , Nav   } from "react-bootstrap"
import CardWidget from "../CardWidget/CardWidget";
import '../NavBar/style.css'
import {Link} from 'react-router-dom'
const NavBar = () => {
  return (
        <header className="NavBar">
            <div>
            <Navbar bg="success" variant="dark" className="colorBarra">
                <Container>
                <Navbar.Brand href="#home" className="fontMarca">THIALE Indumentaria </Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link><Link to ="/"/>Inicio</Nav.Link>
                  <Nav.Link><Link to ="/categoria/gorras">Gorras</Link></Nav.Link>
                  <Nav.Link><Link to ="/categoria/remeras">Remeras</Link></Nav.Link>
                  <Nav.Link><Link to ="/cart">Cart</Link></Nav.Link>
                </Nav>
                <CardWidget/>
                </Container>
            </Navbar>
            </div>
        </header>
  );
};

export default NavBar;