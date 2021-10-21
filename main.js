const btn_der = document.getElementById('right__arrow');
const btn_izq = document.getElementById('left__arrow');
const tbl_monedas = document.getElementById('tabla_monedas');
const tbl_comisiones = document.getElementById('tabla_comisiones');
const coins_container = document.getElementById("coins_container");
const text_actualizado = document.getElementById("text_actualizado");
const refresh_coins = document.getElementById("refresh_coins");
const refresh_comisions = document.getElementById("refresh_comisions");

const API = "https://api.coinlore.net/api/tickers/?start=0&limit=4";
let coins = [];

fetch(API)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    coins = data.data;
    console.log(coins)
    putInfo();
  })

function putInfo(){
  coins_container.innerHTML = '';
  let html = "";
  coins.forEach(coin => {
    html += `
    <div id="${coin.id}" class="coin_container">
      <p class="coin_name">${coin.name}</p>
      <p class="coin_price">$${coin.price_usd}</p>
      <div class="arrow ${getClassImg(coin)}"></div>
    </div>
    `

    coins_container.innerHTML = html;
  });
}

const getClassImg = (coin) => {
  if(coin.percent_change_24h > 0) {
    return 'up';
  } else {
    return 'down';
  }
}

let time1 = 1;
const actulizar = setInterval(() => {
  time1++;
  refresh_coins.innerText = `${(time1).toString().padStart(2, 0)} minutos`;
  refresh_comisions.innerText = `${(time1).toString().padStart(2, 0)} minutos`;
}, 60000)
btn_der.addEventListener("click", () => {
  tbl_monedas.classList.add("hide");
  tbl_comisiones.classList.remove("hide");
})
btn_izq.addEventListener("click", () => {
  tbl_monedas.classList.remove("hide");
  tbl_comisiones.classList.add("hide");
})