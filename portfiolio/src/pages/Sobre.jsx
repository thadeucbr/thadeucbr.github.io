import React, { Component } from 'react';
import '../css/Sobre.css';
import thadeu from '../img/thadeu.jpg';
export default class Sobre extends Component {
  render() {
    function calculate_age(dob) {
      let diff_ms = Date.now() - dob.getTime();
      let age_dt = new Date(diff_ms);
      return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    return (
      <div id="sobre">
        <div className="sobre-card">
          <img src={thadeu} className="photo" />
          <div className="sobre-texto">
            <p>
              Seja muito bem vindo ao meu portifólio, me chamo Thadeu Castelo Branco
              Ramos. {<br />}
              Tenho {calculate_age(new Date(1992, 7, 15))} anos, e atualmente moro em
              Presidente Venceslau - SP{<br />}
              Sou um Desenvolvedor Web em inicio de carreira, estou finalizando meu curso
              de Desenvolvimento Web na Trybe. {<br />}
              Possuo conhecimentos em: {<br />}
              HTML, JS, CSS (Básico), Node.JS, REST API, Express, MongoDB, MySQL, React,
              Socket.IO.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
