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
          `;
          skateList.appendChild(skateItem);
        });
      })
      .catch(error => {
        console.error('Erro ao obter skates:', error);
      });
  }
  
  // Chamada inicial para obter os skates quando a página é carregada
  getSkates();
  