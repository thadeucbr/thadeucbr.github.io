import React, { Component } from 'react';
import MenuZ from '../componentes/MenuZ';
import Projetos from './Projetos';
import Contato from './Contato';
import Timeline from '../componentes/Timeline';
import Sobre from './Sobre';
import Rodape from '../componentes/Rodape';
import $ from 'jquery';
// import Funs from 'jquery';
import '../css/Fonts.css'
import '../css/Foguete.css';

export default class Principal extends Component {
  constructor() {
    super();
    this.state = {
      renderiza: this.props,
    };
  }
  componentDidMount() {
    var btn = $('#back-top');

    $(window).scroll(function () {
      $(this).scrollTop() > 100 ? btn.fadeIn() : btn.fadeOut();
    });

    btn.click(function () {
      $('body,html').animate(
        {
          scrollTop: 0,
        },
        1000
      );
      $('.rocket').addClass('fly');

      setTimeout(function () {
        $('.rocket').removeClass('fly');
      }, 1000);

      return false;
    });
  }
  render() {
    return (
      <div>
        <div id="back-top">
          Inicio <span class="rocket">🚀</span>
        </div>
          <MenuZ />
          <Sobre />
          <Timeline />
          <Projetos />
          <Contato />
          <Rodape />
      </div>
    );
  };
};