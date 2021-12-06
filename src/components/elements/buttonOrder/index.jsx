import React from 'react';
import classNames from 'classnames';
import './buttonOrder.scss';
function ButtonOrder({ name, width, title, bgColor, color, values, toValidForm }) {
  // const [isActive, setIsActive] = useState(false);

  const styleBtn = {
    maxWidth: `${width}px`,
    backgroundColor: bgColor,
    color: color,
  };

  const setDataPoppup = () => {
    toValidForm();
  };

  function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }
  return (
    <button
      style={styleBtn}
      className={classNames('button buttonOrder', {
        disable:
          isEmpty(values.firstname) &&
          isEmpty(values.lastname) &&
          isEmpty(values.phone) &&
          isEmpty(values.email),
      })}
      onClick={setDataPoppup}>
      {title}
    </button>
  );
}

export default ButtonOrder;
