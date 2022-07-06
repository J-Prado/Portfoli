import { useEffect, useRef } from 'react';
import gsap from 'gsap-trial';
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin';
import LogoS from '../../../assets/images/logo-s.png';
import './index.scss';

const Logo = () => {
  const bgRef = useRef();

  return (
    <div className="logo-container">
      <img className="logo-image" src={LogoS} alt="JavaScript" />
    </div>
  );
};

export default Logo;
