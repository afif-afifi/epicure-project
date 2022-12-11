import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../../assets/logo.svg';
import search from '../../../assets/search.svg';
import bag from '../../../assets/bag.svg';
import user from '../../../assets/user.svg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import './Header-stylesheet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NavItem } from 'react-bootstrap';
import { Popup } from '../../Popup/Popup';


export interface IHeaderProps {

}
export function Header(props: IHeaderProps) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    console.log(">>>> ", show);
  }


  return (
    <>
      <Popup show={show} handleClose={handleClose} title='Search' />
      <div className="header">
      <Navbar h-100 collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#resturants">Resturants</Nav.Link>
              <Nav.Link href="#chefs">Chefs</Nav.Link>
              {/* <NavDropdown.Divider /> */}
              <Nav.Link href="#contact-us">Contact Us</Nav.Link>
              <Nav.Link href="#terms">Term of Use</Nav.Link>
              <Nav.Link href="#privacy-policy">Privacy Policy</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width=""
              height=""
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
          <Nav.Item>
            <img
              alt=""
              src={search}
              width=""
              height=""
              className="btn d-inline-block align-top"
              onClick={handleShow}
            />
            <NavDropdown title="" id="navbarScrollingDropdown">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </NavDropdown>
          </Nav.Item>
        </Container>
      </Navbar>
      </div>
    </>
  );
}




