import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuNav } from '../';
import { Button } from '../elements';
import { CallPoppup } from '../modals';
import './header.scss';
import logo from '../../assets/img/logo.png';

const menu = [
  {
    id: 0,
    title: 'Home',
    link: '/',
  },
  {
    id: 1,
    title: 'About us',
    link: '/about',
  },
  {
    id: 2,
    title: 'Our services',
    subItems: [
      {
        id: 0,
        title: 'Home',
        link: '/',
      },
      {
        id: 1,
        title: 'About us',
        link: '/about',
      },
    ],
  },
  {
    id: 3,
    title: 'Contact us',
    link: '/contact',
  },
];

function Header() {
  const [isActiveBtn, setIsActiveBtn] = useState(false);

  return (
    <div className="header">
      <div className="row">
        <div className="col-sm-12">
          <div className="header__inner d-flex justify-between align-center">
            <Link to="/">
              <img className="logo" src={logo} alt="logo company" />
            </Link>

            <div className="header__menu">
              <MenuNav menu={menu} />
            </div>

            <div className="header__call" onClick={() => setIsActiveBtn(!isActiveBtn)}>
              <Button width={'95'} title={'Call us'} />
              {isActiveBtn && <CallPoppup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
