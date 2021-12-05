import React from 'react';

import './callPoppup.scss';
function CallPoppup() {
  const color = {
    color: '#8792a7',
  };
  return (
    <div className="callPoppup">
      <a style={color} href="tel:380630677796">
        +38(063)7777777
      </a>
    </div>
  );
}

export default CallPoppup;
