function getSkates() {
  fetch('http://localhost:4000/inicio')
    .then(response => response.json())
    .then(skates => {
      const skateList = document.getElementById('skate-list');
      skateList.innerHTML = '';

      skates.forEach(skate => {
        const skateItem = document.createElement('div');
        skateItem.classList.add('card');
        skateItem.innerHTML = `
          <h3>${skate.shape}</h3>
          <p>Rodas: ${skate.rodinha}</p>
          <p>Rolamentos: ${skate.rolamentos}</p>
          <p>Trucks: ${skate.trucks}</p>
          <p>Lixa: ${skate.lixa}</p>
          <p>Parafusos: ${skate.parafusos}</p>
          <p>Preço: ${skate.preco}</p>
          <img class="produto-imagem" src="${skate.imagem}" alt="Imagem do skate">
          <div class="card-buttons">
            <button class="btn btn-primary buy-button">Comprar</button>
            <button class="btn btn-secondary espionar-button" data-skate='${JSON.stringify(skate)}'>Espionar</button>
          </div>
        `;
        skateList.appendChild(skateItem);
      });

      const buyButtons = document.getElementsByClassName('buy-button');
      Array.from(buyButtons).forEach(button => {
        button.addEventListener('click', () => {
          const skateData = JSON.parse(button.parentNode.getAttribute('data-skate'));
          buySkate(skateData);
        });
      });

      const espionarButtons = document.getElementsByClassName('espionar-button');
      Array.from(espionarButtons).forEach(button => {
        button.addEventListener('click', () => {
          const skateData = JSON.parse(button.getAttribute('data-skate'));
          showPopup(skateData);
        });
      });
    })
    .catch(error => {
      console.error('Erro ao obter skates:', error);
    });
}

function showPopup(skateData) {
  const popup = document.createElement('div');
  popup.classList.add('popup');
  popup.innerHTML = `
    <div class="popup-content">
      <h3>${skateData.shape}</h3>
      <p>Rodas: ${skateData.rodinha}</p>
      <p>Rolamentos: ${skateData.rolamentos}</p>
      <p>Trucks: ${skateData.trucks}</p>
      <p>Lixa: ${skateData.lixa}</p>
      <p>Parafusos: ${skateData.parafusos}</p>
      <p>Preço: ${skateData.preco}</p>
      <img class="popup-imagem" src="${skateData.imagem}" alt="Imagem do skate">
      <button class="btn btn-primary close-button">x</button>
    </div>
  `;

  const closePopup = () => {
    document.body.removeChild(popup);
  };

  const closeButton = popup.querySelector('.close-button');
  closeButton.addEventListener('click', closePopup);

  document.body.appendChild(popup);
}

let carrinho = [];



function buySkate(skateData) {
  // Verificar se o skate já está no carrinho
  const skateExistente = carrinho.find(item => item.shape === skateData.shape);
  
  if (skateExistente) {
    console.log('Skate já está no carrinho:', skateData);
    return;
  }
  
  // Adicionar o skate ao carrinho
  carrinho.push(skateData);
  console.log('Skate adicionado ao carrinho:', skateData);
}


$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3000 
  });
});
//  obtendo os skates quando a página é carregada
getSkates();




