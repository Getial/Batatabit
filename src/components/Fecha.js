import React from 'react';

const Fecha = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const año = fecha.getFullYear();
  const hora = fecha.getHours();
  const minuto = fecha.getMinutes();

  const tiempotranscurrido = Date.now();
  const hoy = new Date(tiempotranscurrido);
  const actual = hoy.toLocaleString();

  const getMonthStr = (m) => {
    switch(m) {
      case 0: 
        return 'Enero';
      case 1: 
        return 'Febrero';
      case 2: 
        return 'Marzo';
      case 3: 
        return 'Abril';
      case 4: 
        return 'Mayo';
      case 5: 
        return 'Junio';
      case 6: 
        return 'Julio';
      case 7: 
        return 'Agosto';
      case 8: 
        return 'Septiembre';
      case 9: 
        return 'Octubre';
      case 10: 
        return 'Noviembre';
      case 11: 
        return 'Diciembre';
    }
  }

  return (
    <>
      <p><b>Actualizado:</b>{` ${dia} de ${getMonthStr(mes)} ${hora}:00 hrs`}</p>
      {/* <p>{actual}</p> */}
    </>
  )
}

export default Fecha;