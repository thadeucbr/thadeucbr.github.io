import React, { Component } from 'react';
import '../css/Projetos.css';
class App extends Component {
  render() {
    return (
      <div id="projetos">
        <div class="container">
          <div class="card-projetos">
            <div class="face face1">
              <div class="content-projetos">
              <i class="fab fa-js fa-3x" style={{ color: '#F0DB4F' }}></i>{' '}
                <i class="fab fa-html5 fa-3x" style={{ color: '#A0522D' }}></i>{' '}
                <i class="fab fa-css3-alt fa-3x" style={{ color: '#00008B' }}></i>{' '}
                <i  class="fab fa-github fa-3x" style={{ color: '#BC8F8F' }}></i>{' '}
                <i class="fab fa-node-js fa-3x" style={{ color: '#556B2F' }}></i>{' '}
                <h3 style={{ color: '#34b779' }} >Trybe</h3>
                <i class="fas fa-database fa-3x" style={{ color: '#4F4F4F' }}></i>{' '}
                <i class="fab fa-react fa-3x" style={{ color: '#5F9EA0' }}></i>{' '}
              </div>
            </div>
            <div class="face face2">
              <div class="content-projetos">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                  repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus
                  illum perferendis maiores quia molestias vitae fugiat aspernatur alias
                  corporis?
                </p>
                <a href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div class="card-projetos">
            <div class="face face1">
              <div class="content-projetos">
              <i class="fab fa-js fa-9x" style={{color: "#F0DB4F"}}></i> <h3>JavaScript</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content-projetos">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                  repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus
                  illum perferendis maiores quia molestias vitae fugiat aspernatur alias
                  corporis?
                </p>
                <a href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
  
          <div class="card-projetos">
            <div class="face face1">
              <div class="content-projetos">
                <i class="fab fa-apple"></i>
                <h3>Apple</h3>
              </div>
            </div>
            <div class="face face2">
              <div class="content-projetos">
                <p>
                  {' '}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ab
                  repudiandae, explicabo voluptate et hic cum ratione a. Officia delectus
                  illum perferendis maiores quia molestias vitae fugiat aspernatur alias
                  corporis?
                </p>
                <a href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
