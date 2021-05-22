import React, { Component } from 'react';

import '../styles/MainExchange.css';
import Http from '../libs/http';
import Fecha from './Fecha';
import Coin from './Coin';

class MainExchange extends Component { 
  state = {
    coins: []
  }

  componentDidMount = async () => {
    this.getCoins();
  }

  getCoins = async () => {
    const res = await Http.instance.get(" https://api.coinlore.net/api/tickers/?start=0&limit=4");

    this.setState({ coins: res.data});

    console.log(this.state.coins);
  }

  render() {
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
                  {this.state.coins.map((coin) => {
                    return (
                      <tr key={coin.id}>
                        <Coin coin={coin} />
                        {/* <td className="table__left">{coin.name}</td>
                        <td className="table__right">${coin.price_usd} <span className="down"></span></td> */}
                      </tr>
                    )
                  })}          
                </table>
              </div>
              <div className="currency-table--date">
                <Fecha />
              </div>
              <div>
                <p className="citas">*la caida y subida del precio es dada en lo ocurrido en la ultima hora</p>
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
                    <td className="table__top-right table__right">$12.96</td>
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
                    <td className="table__bottom-right table__right">$14.96</td>
                  </tr>
                </table>
              </div>
              <div className="commission-table--date">
              <Fecha />
              </div>
            </div>
  
          </section>
        </section>
      </>
    )
  }
}

export default MainExchange;