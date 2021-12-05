import React, { useState } from 'react';
import axios from 'axios';
import useForm from '../../hooks/useForm';
import { Button } from '../elements';
import classNames from 'classnames';
import style from './Form.module.scss';

const Form = ({ poppupActive, setPoppupActive }) => {
  const { values, setValues, handleChange, handleSubmit } = useForm(order);

  const [activeInput, setActiveInput] = useState('');

  const [firstError, setFirstError] = useState('');
  const [lastError, setLastError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');

  const errorText = {
    position: 'absolute',
    bottom: '-16px',
    fontSize: '12px',
    color: '#E43F3F',
  };

  const error = {
    position: 'absolute',
    top: '-26px',
    fontSize: '24px',
    color: '#000000',
  };

  async function order() {
    console.log(values);
    if (firstError === '' && lastError === '' && phoneError && emailError) {
      try {
        const response = await axios.post('http://localhost:9999/form', values);
        setValues({ firstname: '' });
        setValues({ lastname: '' });
        setValues({ phone: '' });
        setValues({ email: '' });
        console.log(response.config.data);
        alert('These forms have been sent successfully!');
      } catch (error) {
        alert('Error sending a form');
      }
    }
  }

  //Check on emptiness
  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  // Cleaning form
  // const toClear = (value, event) => {
  //   if (value === 'firstname') {
  //     event.preventDefault();
  //     return setValues({ firstname: '' });
  //   }
  //   if (value === 'lastname') {
  //     event.preventDefault();
  //     return setValues({ lastname: '' });
  //   }
  //   if (value === 'phone') {
  //     event.preventDefault();
  //     return setValues({ phone: '' });
  //   }
  //   if (value === 'email') {
  //     event.preventDefault();
  //     return setValues({ email: '' });
  //   }
  // };

  // Validation forms only letters
  const onlyLetters = (str) => {
    return /^[a-zA-Z\u00C0-\u00ff]+$/.test(str);
  };

  // Validation forms only numbers
  const onlyNumbers = (str) => {
    return !/\D/.test(str);
  };

  //phone number length
  const lengthNumbers = (str) => {
    return str.length !== 12;
  };

  const toValidForm = () => {
    if (isEmpty(values.firstname)) {
      setFirstError('This field in required');
    } else if (!onlyLetters(String(values.firstname))) {
      setFirstError('Only letters allowed');
    } else {
      setFirstError('');
    }

    if (isEmpty(values.lastname)) {
      setLastError('This field in required');
    } else if (!onlyLetters(String(values.lastname))) {
      setLastError('Only letters allowed');
    } else {
      setLastError('');
    }

    if (isEmpty(values.phone)) {
      setPhoneError('This field in required');
    } else if (!onlyNumbers(String(values.phone))) {
      setPhoneError('Only numbers allowed');
    } else if (lengthNumbers(String(values.phone))) {
      setPhoneError('Should contain 12 characters');
    } else {
      setPhoneError('');
    }

    if (isEmpty(values.email)) {
      setEmailError('This field in required');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className={style.section}>
      <form className={classNames(style.form, 'form')} onSubmit={handleSubmit}>
        <div className={style.title}>
          <span>Contact</span> Us
        </div>

        <div className="row">
          <div className="'col-sm-6'">
            <div className="row justify-between">
              <label
                className={classNames(style.label, 'col-sm-6 label', {
                  active: activeInput === 'firstname',
                })}>
                <span style={error}>{firstError && 'Error'}</span>
                <span className={classNames(style.input, 'input')}>
                  <span
                    className={classNames('label-name', { active: !isEmpty(values.firstname) })}>
                    First Name
                  </span>
                  <input
                    type="firstname"
                    name="firstname"
                    onChange={handleChange}
                    value={values.firstname}
                    onClick={() => setActiveInput('firstname')}
                  />
                </span>
                <span style={errorText}>{firstError}</span>
              </label>

              <label
                className={classNames(style.label, 'col-sm-6 label', {
                  active: activeInput === 'lastname',
                })}>
                <span style={error}>{lastError && 'Error'}</span>
                <span className={classNames(style.input)}>
                  <span className={classNames('label-name', { active: !isEmpty(values.lastname) })}>
                    Last Name
                  </span>
                  <input
                    type="lastname"
                    name="lastname"
                    onChange={handleChange}
                    value={values.lastname}
                    onClick={() => setActiveInput('lastname')}
                  />
                </span>
                <span style={errorText}>{lastError}</span>
              </label>
            </div>
          </div>

          <div className="'col-sm-6'">
            <div className="row justify-between">
              <label
                className={classNames(style.label, 'col-sm-6 label', {
                  active: activeInput === 'phone',
                })}>
                <span style={error}>{phoneError && 'Error'}</span>
                <span className={classNames(style.input)}>
                  <span className={classNames('label-name', { active: !isEmpty(values.phone) })}>
                    Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    value={values.phone}
                    onClick={() => setActiveInput('phone')}
                  />
                </span>

                <span style={errorText}>{phoneError}</span>
              </label>

              <label
                className={classNames(style.label, 'col-sm-6 label', {
                  active: activeInput === 'email',
                })}>
                <span style={error}>{emailError && 'Error'}</span>
                <span className={classNames(style.input)}>
                  <span className={classNames('label-name', { active: !isEmpty(values.email) })}>
                    Enter email
                  </span>
                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    value={values.email}
                    onClick={() => setActiveInput('email')}
                  />
                </span>

                <span style={errorText}>{emailError}</span>
              </label>
            </div>
          </div>

          <div className="'col-sm-6'">
            <div className="row justify-between">
              <label
                className={classNames(style.label, 'col-sm-12 label textarea', {
                  active: activeInput === 'message',
                })}>
                <span className={classNames('label-name', { active: !isEmpty(values.comments) })}>
                  Message
                </span>
                <textarea
                  name="comments"
                  required
                  minLength={5}
                  maxLength={50}
                  onChange={handleChange}
                  className={style.message}
                  onClick={() => setActiveInput('message')}
                />
              </label>
            </div>
          </div>

          <div className="'col-sm-6'">
            <div className="row">
              <div className="col-sm-12">
                <Button
                  width={'211'}
                  title={'Send'}
                  name={'Order'}
                  bgColor={'#121212'}
                  color={'#ffffff'}
                  type="submit"
                  poppupActive={poppupActive}
                  setPoppupActive={() => setPoppupActive}
                  values={values}
                  toValidForm={toValidForm}
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
