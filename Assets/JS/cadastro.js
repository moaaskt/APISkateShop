const form = document.getElementById('cadastroForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const shapeInput = document.getElementById('shape');
  const rodinhaInput = document.getElementById('rodinha');
  const rolamentosInput = document.getElementById('rolamentos');
  const trucksInput = document.getElementById('trucks');
  const lixaInput = document.getElementById('lixa');
  const parafusosInput = document.getElementById('parafusos');
  const imagemInput = document.getElementById('imagem');
  const precoInput = document.getElementById('preco');

  const novoSkate = {
    shape: shapeInput.value,
    rodinha: rodinhaInput.value,
    rolamentos: rolamentosInput.value,
    trucks: trucksInput.value,
    lixa: lixaInput.value,
    parafusos: parafusosInput.value,
    imagem: imagemInput.value, // Obtém o link da imagem
    preco: precoInput.value
  };

  fetch('http://localhost:4000/criar', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoSkate)
  })
    .then((response) => response.json())
    .then((data) => {
      alert(data.mensagem);
      form.reset();
    })
    .catch((error) => {
      console.error('Erro ao cadastrar skate:', error);
      alert('Erro ao cadastrar skate');
    });
});
