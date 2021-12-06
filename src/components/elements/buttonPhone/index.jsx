import React from 'react';
import { Link } from 'react-router-dom';

const ButtonPhone = ({ tel, label }) => {
  return (
    <Link
      className="wp"
      to="#"
      onClick={(e) => {
        window.location = tel;
        e.preventDefault();
      }}>
      {label}
    </Link>
  );
};

export default ButtonPhone;
