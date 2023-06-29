// Função para fazer uma requisição GET à API e exibir os skates
function getSkates() {
  fetch('http://localhost:4000/inicio')
    .then(response => response.json())
    .then(skates => {
      const skateList = document.getElementById('skate-list');
      skateList.innerHTML = '';

      skates.forEach(skate => {
        const skateItem = document.createElement('div');
        skateItem.innerHTML = `
          <h3>${skate.shape}</h3>
          <p>Rodas: ${skate.rodinha}</p>
          <p>Rolamentos: ${skate.rolamentos}</p>
          <p>Trucks: ${skate.trucks}</p>
          <p>Lixa: ${skate.lixa}</p>
          <p>Parafusos: ${skate.parafusos}</p>
          <p>Preço: ${skate.preco}</p>
          <img class="produto-imagem" src="${skate.imagem}" alt="Imagem do skate">
        `;
        skateList.appendChild(skateItem);
      });
    })
    .catch(error => {
      console.error('Erro ao obter skates:', error);
    });
}
$(document).ready(function() {
  $('.carousel').carousel({
    interval: 3000 // Tempo em milissegundos entre cada transição de slide (5 segundos neste exemplo)
  });
});
// Chamada inicial para obter os skates quando a página é carregada
getSkates();
