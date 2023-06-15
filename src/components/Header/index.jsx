import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import style from './index.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
const Header = () => {
  return (
    <Navbar className="pt-2" bg="white" variant="light">
      <Container>
        <Navbar.Brand href="#home">QuranApp</Navbar.Brand>
        <Nav>
          <Nav.Link className={style.rootLink} href="#home">
            Home
          </Nav.Link>
          <Nav.Link className={style.rootLink} href="#features">
            Read
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
