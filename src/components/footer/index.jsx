import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonMailto, ButtonPhone } from '../elements';
import dmca from '../../assets/img/dmca.png';
import logo from '../../assets/img/footer-logo.png';
import './footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-sm-12">
          <div className="footer__inner">
            <div className="footer__block">
              <div className="footer__column">
                <span className="footer__title mb-15">
                  <Link to="/">
                    <img className="footer__logo" src={logo} alt="logo" />
                  </Link>
                </span>

                <ul className="footer__items">
                  <li className="footer__item">All Rights Reserved to info.com</li>

                  <li className="footer__item">© DDD – Web Marketing</li>

                  <li className="footer__item">Privacy Policy</li>

                  <li className="footer__item">
                    <img src={dmca} alt="dmca" />
                  </li>
                </ul>
              </div>

              <div className="footer__column">
                <span className="footer__title">Contact us</span>

                <ul className="footer__items">
                  <li className="footer__item">
                    <span className="d-flex justify-start align-start">
                      <span className="footer__lang">UK</span>
                      <span className="d-flex flex-column">
                        <ButtonPhone label="+44-2020202020" tel="tel:442020202020" />
                        <ButtonPhone label="+44-2020202020" tel="tel:442020202020" />
                      </span>
                    </span>
                  </li>

                  <li className="footer__item">
                    <span className="d-flex justify-start align-start">
                      <span className="footer__lang">AUT</span>
                      <ButtonPhone label="+44-2020202020" tel="tel:442020202020" />
                    </span>
                  </li>

                  <li className="footer__item">
                    <span className="d-flex justify-start align-start">
                      <span className="footer__lang">AUS</span>
                      <ButtonPhone label="+44-2020202020" tel="tel:442020202020" />
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer__block">
              <div className="footer__box">
                <div className="footer__column">
                  <span className="footer__title">ADDRESS</span>

                  <ul className="footer__items">
                    <li className="footer__item">
                      <Link to="/">
                        <span className="address row-hidden">Lorem ipsum set amet</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="footer__column">
                  <span className="footer__title">OUR OFFICE HOURS</span>

                  <ul className="footer__items">
                    <li className="footer__item">
                      <span className="our-office row-hidden">
                        Mon-Fr: 8:00-18:00 GMT Sat/Su: Closed
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer__column">
                <span className="footer__title">Email US</span>

                <ul className="footer__items">
                  <li className="footer__item">
                    <ButtonMailto label="info@info.com" mailto="mailto:info@info.com" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
