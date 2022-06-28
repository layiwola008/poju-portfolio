import React from 'react';
import './Footer.css';

import footerImg from '../../../assets/Home/shape-bg.png';

export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={footerImg} alt='no internet connection' />
        </div>
    </div>
  )
}
