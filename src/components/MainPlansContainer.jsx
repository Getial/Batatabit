import React from 'react';

import '../styles/MainPlansContainer.css'

const MainPlansContainer = () => (
  <section id="plans" className="main-plans-container">
    <div className="plans--title">
      <h2>Escoge el plan que mejor se ajuste a ti.</h2>
      <p>Cualquier plan te da acceso completo a nuestra plataforma.</p>
    </div>
    <section className="plans-container--slider">
      <article className="plans-container--card">
        <div className="plan-info-container">
          <h3 className="plan-card--title">Pago Semestral</h3>
          <p className="plan-card--price"><span>$</span> 65</p>
          <p className="plan-card--saving">* Ahorras $50 comparado al plan mensual</p>
          <button className="plan-card--ca">Escoger este <span>
            </span></button>
        </div>
      </article>
      <article className="plans-container--card">
        <p className="recommended">Recomendado</p>
        <div className="plan-info-container">
          <h3 className="plan-card--title">Pago Anual</h3>
          <p className="plan-card--price"><span>$</span> 99</p>
          <p className="plan-card--saving">* Ahorras $129 comparado al plan mensual</p>
          <button className="plan-card--ca">Escoger este <span>
            </span></button>
        </div>
      </article>
      <article className="plans-container--card">
        <div className="plan-info-container">
          <h3 className="plan-card--title">Pago mensual</h3>
          <p className="plan-card--price"><span>$</span> 19</p>
          <p className="plan-card--saving">* acceso mensual a toda la plataforma y sus servicios</p>
          <button className="plan-card--ca">Escoger este <span>
            </span></button>
        </div>
      </article>
    </section>
  </section>
)

export default MainPlansContainer;