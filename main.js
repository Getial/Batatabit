const btn_der = document.getElementById('right__arrow');
const btn_izq = document.getElementById('left__arrow');
const tbl_monedas = document.getElementById('tabla_monedas');
const tbl_comisiones = document.getElementById('tabla_comisiones');

btn_der.addEventListener("click", () => {
    tbl_monedas.classList.add("hide");
    tbl_comisiones.classList.remove("hide");
})
btn_izq.addEventListener("click", () => {
    tbl_monedas.classList.remove("hide");
    tbl_comisiones.classList.add("hide");
})