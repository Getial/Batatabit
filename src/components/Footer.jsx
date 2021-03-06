import React from 'react';

import '../styles/Footer.css';
import LogoFooter from '../assets/images/logo-footer.svg';

const Footer = () => (
  <footer>
    <section className="left">
      <ul>
        <li><a href="#"></a>Linkedin</li>
        <li><a href="#"></a>Crunchbase</li>
        <li><a href="#"></a>Hackernews</li>
      </ul>
    </section>
    <section className="right">
      <img src={LogoFooter} alt="Logo Batatabit 2021"/>
    </section>
  </footer>
)

export default Footer;