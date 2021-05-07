import React from 'react';

import '../styles/MainExchange.css'

const MainExchange = () => { 
  return(
    <>
      <section className="main-exchange-container">
        <div className="backgroundImg"></div>
        <div className="main-exchange-container--title">
          <h2>Visibilizamos todas las tasas de cambio</h2>
          <p>Traemos informacion en tiempo real de las casas de cambio y las monedas más importantes del mundo</p>
        </div>
        <section className="main-tables-container">

          <div className="main-currency-table" id="tabla_monedas">
            <p className="currency-table--title">Monedas</p>
            <button id="right__arrow" className="right__arrow" href="#" onClick={() =>{
              document.getElementById('tabla_monedas').classList.add("hide");
              document.getElementById('tabla_comisiones').classList.remove("hide");
            }}></button>
            <div className="currency-table--container">
              <table>
                <tr>
                  <td className="table__top-left">Bitcoin</td>
                  <td className="table__top-right table__right">$1.96 <span className="down"></span></td>
                </tr>
                <tr>
                  <td >Etherum</td>
                  <td className="table__right">$0.7 <span className="down"></span></td>
                </tr>
                <tr>
                  <td >Riple</td>
                  <td className="table__right">$2.17 <span className="up"></span></td>
                </tr>
                <tr>
                  <td className="table__bottom-left">Stellar</td>
                  <td className="table__bottom-right table__right">$4.96 <span className="down"></span></td>
                </tr>
              </table>
            </div>
            <div className="currency-table--date">
              <p><b>Actualizado:</b> 23 de abril 23:45</p>
            </div>
          </div>

          <div className="main-commission-table hide" id="tabla_comisiones">
            <p className="commission-table--title">Comisiones</p>
            <button id="left__arrow" className="left__arrow" href="#" onClick={() =>{
              document.getElementById('tabla_monedas').classList.remove("hide");
              document.getElementById('tabla_comisiones').classList.add("hide");
            }}></button>
            <div className="commission-table--container">
              <table>
                <tr>
                  <td className="table__top-left">Bitrade</td>
                  <td className="table__top-right table__right">12.96</td>
                </tr>
                <tr>
                  <td>Bitpreco</td>
                  <td className="table__right">$13.07</td>
                </tr>
                <tr>
                  <td>Novadax</td>
                  <td className="table__right">$13.15</td>
                </tr>
                <tr>
                  <td className="table__bottom-left">Coinex</td>
                  <td className="table__bottom-right table__right">14.96</td>
                </tr>
              </table>
            </div>
            <div className="commission-table--date">
              <p><b>Actualizado:</b> 23 de Abril 23:45</p>
            </div>
          </div>

        </section>
      </section>
    </>
  )
}

export default MainExchange;