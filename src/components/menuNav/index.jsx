import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './menuNav.scss';
function MenuNav({ menu }) {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  function clickMobileBtn() {
    setIsMobileMenu(!isMobileMenu);
  }

  function clickLinkMenu() {
    console.log('loh');
    if (!isMobileMenu) {
      document.getElementById('navbar-collapse').classList.remove('show');
    }
  }

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
        <div className="menu-toggle" onClick={() => clickMobileBtn}>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <span className="menu-toggle-title">Menu</span>
        </div>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {menu &&
              menu.map((item, index) => {
                return (
                  <Link to={item.link} onClick={() => clickLinkMenu}>
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
