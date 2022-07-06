import { useEffect, useRef } from 'react';

import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';

const Logo = () => {
  return (
    <div className="logo-container">
      <img className="logo-image" src={LogoS} alt="JavaScript" />
    </div>
  );
};

export default Logo;
