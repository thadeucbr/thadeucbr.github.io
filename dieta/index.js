import refeicoes from './refeicoes.js';
import equivalentes from './equivalentes.js';

// Seleciona todos os cabeçalhos do accordion
const headers = document.querySelectorAll('.accordion-header');
const contents = document.querySelectorAll('.accordion-content');

// Seleciona todas as refeições
const desjejumMain = document.querySelector('#desjejum-main')
const desjejumVariation = document.querySelector('#desjejum-variation')
const colacao = document.querySelector('#colacao')
const almoco = document.querySelector('#almoco')
const lancheMain = document.querySelector('#lanche-main')
const lancheVariation = document.querySelector('#lanche-variation')
const jantar = document.querySelector('#jantar')

const getHours = new Date().getHours();
const getDay = new Date().getDay();

if (getHours >= 6 && getHours <= 9) {
  headers[0].classList.add('active')
  contents[0].classList.add('active');
}

if (getHours > 9 && getHours <= 11) {
  headers[1].classList.add('active')
  contents[1].classList.add('active');
}

if (getHours > 11 && getHours <= 13) {
  headers[2].classList.add('active')
  contents[2].classList.add('active');
}

if (getHours > 13 && getHours <= 19) {
  headers[3].classList.add('active')
  contents[3].classList.add('active');
}

if (getHours > 19 && getHours <= 22) {
  headers[4].classList.add('active')
  contents[4].classList.add('active');
}

refeicoes[getDay].desjejum.main.forEach(refeicao => {
  const novaRefeicao = document.createElement('li');
  novaRefeicao.textContent = refeicao;
  desjejumMain.appendChild(novaRefeicao)
})

refeicoes[getDay].desjejum.variation.forEach(refeicao => {
  const novaRefeicao = document.createElement('li');
  novaRefeicao.textContent = refeicao;
  desjejumVariation.appendChild(novaRefeicao)
})

refeicoes[getDay].colacao.forEach(refeicao => {
  const novaRefeicao = document.createElement('li');
  novaRefeicao.textContent = refeicao;
  colacao.appendChild(novaRefeicao)
})

refeicoes[getDay].almoco.forEach(refeicao => {
  const novaRefeicao = document.createElement('li');
  novaRefeicao.textContent = refeicao;
  almoco.appendChild(novaRefeicao)
})

refeicoes[getDay].lanche.main.forEach(refeicao => {
  const novaRefeicao = document.createElement('li');
  novaRefeicao.textContent = refeicao;
  lancheMain.appendChild(novaRefeicao)
})

refeicoes[getDay].lanche.variation.forEach(refeicao => {
  const novaRefeicao = document.createElement('li');
  novaRefeicao.textContent = refeicao;
  lancheVariation.appendChild(novaRefeicao)
})

refeicoes[getDay].jantar.forEach(refeicao => {
  const novaRefeicao = document.createElement('li');
  novaRefeicao.textContent = refeicao;
  jantar.appendChild(novaRefeicao)
})

// Adiciona um listener de eventos para cada cabeçalho
headers.forEach(function (header) {
  header.addEventListener('click', function () {
    // Seleciona o conteúdo do accordion
    const content = this.nextElementSibling;

    // Remove a classe "active" do cabeçalho e do conteúdo de todos os accordions
    headers.forEach(function (header) {
      header.classList.remove('active');
    });
    
    contents.forEach(function (content) {
      content.classList.remove('active');
    });

    // Adiciona a classe "active" ao cabeçalho e ao conteúdo do accordion atual
    this.classList.add('active');
    content.classList.add('active');
  });
});

equivalentes.forEach(group => {
  const accodionHeader = document.createElement('div')
  accodionHeader.classList.add('accordion-header2')
  accodionHeader.textContent = group.group.toUpperCase()

  const accordionContent = document.createElement('div')
  accordionContent.classList.add('accordion-content2')

  const table = document.createElement('table')
  const columns = document.createElement('tr')
  const name = document.createElement('th')
  const quantity = document.createElement('th')

  name.textContent = 'Item'
  quantity.textContent = 'Quantidade'

  columns.appendChild(name)
  columns.appendChild(quantity);

  table.append(columns)
  const foods = group.food.map(item => item.split(','))
  foods.forEach(([food, quantity]) => {
    const row = document.createElement('tr')
    const itemName = document.createElement('td')
    const quantityName = document.createElement('td')

    itemName.textContent = food
    quantityName.textContent = quantity || 'Livre'

    row.appendChild(itemName)
    row.appendChild(quantityName)
    table.appendChild(row)
  })
  accordionContent.appendChild(table)
  contents[5].appendChild(accodionHeader)
  contents[5].appendChild(accordionContent)
})

const headers2 = document.querySelectorAll('.accordion-header2');
const contents2 = document.querySelectorAll('.accordion-content2');

headers2.forEach(function (header) {
  header.addEventListener('click', function () {
    // Seleciona o conteúdo do accordion
    const content = this.nextElementSibling;

    // Remove a classe "active" do cabeçalho e do conteúdo de todos os accordions
    headers2.forEach(function (header) {
      header.classList.remove('active');
    });
    
    contents2.forEach(function (content) {
      content.classList.remove('active');
    });

    // Adiciona a classe "active" ao cabeçalho e ao conteúdo do accordion atual
    this.classList.add('active');
    content.classList.add('active');
  });
});
