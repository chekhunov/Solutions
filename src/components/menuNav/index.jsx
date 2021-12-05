import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './menuNav.scss';
function MenuNav({ menu }) {
  //subMenu
  function createdPoppupMenu(title, subItems) {
    return (
      <NavDropdown title={title} id="basic-nav-dropdown" className="fd">
        {subItems.map((item, index) => {
          return (
            <Link to={item.link}>
              <NavDropdown.Item key={index} href={`#${item.link}`}>
                {item.title}
              </NavDropdown.Item>
            </Link>
          );
        })}
      </NavDropdown>
    );
  }

  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu &&
              menu.map((item, index) => {
                return (
                  <Link to={item.link}>
                    <Nav.Link key={index} href={`#${item.link}`}>
                      {item.subItems ? createdPoppupMenu(item.title, item.subItems) : item.title}
                    </Nav.Link>
                    {/* {item.subItems && createdPoppupMenu(item.title, item.subItems)} */}
                  </Link>
                );
              })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MenuNav;
