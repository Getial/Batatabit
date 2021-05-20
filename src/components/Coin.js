import React from 'react';

const Coin = ({coin}) => {
  const getClassImg = () => {
    if(coin.percent_change_24h > 0) {
      return 'up';
    } else {
      return 'down';
    }
  }
  return (
    <>
      <td >{coin.name}</td>
      <td className="table__right">${coin.price_usd} <span className={getClassImg()} id="indicador"></span></td>
    </>
  )
}

export default Coin;