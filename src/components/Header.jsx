import React from 'react';
import logo from '../assets/images/logo.svg';
import '../styles/Header.css'

const Header = () => (
  <header>
    {/* <img src="../assets/images/logo.svg" alt="logo batatabit" /> */}
    <img src={logo} />
    <div className="header--title-container">
      <h1>La proxima revolucion en el intercambio de monedas</h1>
      <p>Batatabit te ayuda a navegar entre los diferentes precios y tendencias</p>
      <a href="#plans" class="header--button">Conoce nuestros planes <span></span></a>
    </div>
  </header>
)

export default Header;