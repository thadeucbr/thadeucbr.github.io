import React, { Component } from 'react';
import '../css/Contato.scss';
export default class Contato extends Component {
  render() {
    return (
      <div id="contato">
        <div class="card1">
          <div class="card1-back">
            <div class="line-numbers">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <code>
              <span class="variable">const</span>
              <span class="function"> sobre</span>
              <span class="operator">=</span>
              <span>{'{'}</span>
              <div class="indent">
                {' '}
                <span class="property">nome</span>
                <span class="operator">:</span>
                <span class="string">'Thadeu Castelo Branco'</span>
                <span>,</span>
              </div>
              <div class="indent">
                {' '}
                <span class="property">cargo</span>
                <span class="operator">:</span>
                <span class="string">'Desenvolvedor Web'</span>
                <span>,</span>
              </div>
              <div class="indent">
                {' '}
                <span class="property">contato</span>
                <span class="operator">:</span>
                <span>{'{'}</span>
                <div class="indent">
                  {' '}
                  <span class="property">email</span>
                  <span class="operator">:</span>
                  <span class="string">'thadeucbr@gmail.com'</span>
                  <span>,</span>
                </div>
                <div class="indent">
                  <span class="property">website</span>
                  <span class="operator">:</span>
                  <span class="string">'https://thadeucbr.github.io/'</span>
                </div>
                <span>{'}'}</span>
              </div>
              <span>{'}'}</span>
            </code>
          </div>
          <div class="card1-front">
            <div class="line-numbers">
              <div>1</div>
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
              <div>6</div>
              <div>7</div>
              <div>8</div>
              <div>9</div>
            </div>
            <code>
              <span class="variable">this</span>
              <span>.</span>
              <span class="method">addEventListener</span>
              <span>(</span>
              <span class="string">'mouseover'</span>
              <span>,</span>
              <span class="function">{'() =>'}</span>
              <span>{'{'}</span>
              <div class="indent">
                <span class="variable">this</span>
                <span>.</span>
                <span class="property">flipCard</span>
                <span>=</span>
                <span class="boolean">true</span>
                <span>;</span>
              </div>
              <span>{'}'});</span>
            </code>
          </div>
        </div>
      </div>
    );
  }
}
