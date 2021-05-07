import React from 'react';
import '../styles/MainProductDetail.css'

const MainProductDetail = () => (
  <section className="main-product-detail">
    <span className="product-detail--batata-logo"></span>
    <div className="product-detail--title">
      <h2>Creamos un producto sin comparacion.</h2>
      <p>Confiable y diseñado para su uso diario</p>
    </div>
    <section className="product-cards--container">
      <article className="product-detail--card">
        <span className="card-icon clock"></span>
        <p className="product--card-title">Tiempo real</p>
        <p className="product--card-body">Nuestra API toma informacion minuto a minuto sobre las tasas que mas determinan el comportamiento.</p>
      </article>
      <article className="product-detail--card">
        <span className="card-icon eye"></span>
        <p className="product--card-title">No hay tasas escondidas</p>
        <p className="product--card-body">Ni en la compra o al momento de exit, Batatabit siempre te muestra el costo real de lo que estas adquiriendo.</p>
      </article>
      <article className="product-detail--card">
        <span className="card-icon dollar-sign"></span>
        <p className="product--card-title">Compara monedas</p>
        <p className="product--card-body">No más rumores, con Batatabit sabras el valor real de cada moneda en el mercado actual.</p>
      </article>
      <article className="product-detail--card">
        <span className="card-icon check-circle"></span>
        <p className="product--card-title">Informacion confiable</p>
        <p className="product--card-body">Nuestras fuentes estan 100% verificadas y continuamos auditando su contenido mientras se actualizan</p>
      </article>
    </section>
  </section>
)

export default MainProductDetail;