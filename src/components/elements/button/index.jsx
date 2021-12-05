import React, { useState } from 'react';
import classNames from 'classnames';
import './button.scss';
function Button({ name, width, title, bgColor, color, values, setPoppupActive, toValidForm }) {
  const [isActive, setIsActive] = useState(false);

  const styleBtn = {
    maxWidth: `${width}px`,
    backgroundColor: bgColor,
    color: color,
  };

  const clickBtn = () => {
    setIsActive(!isActive);
    const order = name === 'Order' ? setDataPoppup : '';

    return order;
  };

  const setDataPoppup = () => {
    toValidForm();
    setPoppupActive({ active: true, title: name });
  };

  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  return (
    <div
      style={styleBtn}
      className={classNames(
        'button',
        { active: isActive },
        {
          disable:
            name === 'Order' &&
            isEmpty(values.firstname) &&
            isEmpty(values.lastname) &&
            isEmpty(values.phone) &&
            isEmpty(values.email),
        },
      )}
      onClick={clickBtn}>
      {title}
    </div>
  );
}

export default Button;
