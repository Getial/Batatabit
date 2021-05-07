import React from 'react';

const Fecha = () => {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.getMonth();
  const año = fecha.getFullYear();

  const tiempotranscurrido = Date.now();
  const hoy = new Date(tiempotranscurrido);
  const actual = hoy.toLocalString();

  return (
    <>
      <p>hoy es {`${dia}/0${mes + 1}/${año}`}</p>
      <p>{actual}</p>
    </>
  )
}

export default Fecha;