import React from 'react';
import { Button } from '../../components/elements';
import { Form } from '../../components/';

import './contact.scss';
function Contact() {
  return (
    <div className="contact">
      <div className="row d-flex justify-center">
        <div className="contact__top d-flex flex-column align-center col-md-8 col-sm-10 ">
          <div className="contact__title row-hidden">Lorem ipsum set ammet test-test</div>

          <div className="contact__subtitle row-hidden-one uppercase">
            Let us help you get it all back!
          </div>

          <span className="contact__decor">
            <svg
              width="503"
              height="11"
              viewBox="0 0 503 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M502.5 1L0.5 10H366.5" stroke="#121212" />
            </svg>
          </span>

          <div className="contact__bottom d-flex justify-center align-center">
            <p className="contact__bottom-text row-hidden">
              We currently take cases that are $10,000 US and up
            </p>

            <Button
              width={'211'}
              title={'Get a free consultation'}
              bgColor={'#121212'}
              color={'#ffffff'}
            />
          </div>

          <span className="left">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M1 11V1H11" stroke="#121212" />
            </svg>
          </span>

          <span className="right">
            <svg
              width="11"
              height="11"
              viewBox="0 0 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M10 0L10 10L0 10" stroke="#121212" />
            </svg>
          </span>
        </div>
      </div>

      <div className="row d-flex justify-center">
        <div className="contact__form col-sm-10">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default Contact;
