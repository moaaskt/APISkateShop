function mostrarCarrinho() {
    // Acessar o elemento da tabela no HTML
    const tabelaCarrinho = document.getElementById('tabela-carrinho');
  
    // Limpar a tabela
    tabelaCarrinho.innerHTML = '';
  
    // Iterar sobre os itens do carrinho
    carrinho.forEach((skate, index) => {
      const linha = tabelaCarrinho.insertRow();
  
      // Adicionar  as informações do skate
      const colunaShape = linha.insertCell();
      colunaShape.textContent = skate.shape;
  
      const colunaRodas = linha.insertCell();
      colunaRodas.textContent = skate.rodinha;
  
      const colunaRolamentos = linha.insertCell();
      colunaRolamentos.textContent = skate.rolamentos;
  
      const colunaTrucks = linha.insertCell();
      colunaTrucks.textContent = skate.trucks;
  
      const colunaLixa = linha.insertCell();
      colunaLixa.textContent = skate.lixa;
  
      const colunaParafusos = linha.insertCell();
      colunaParafusos.textContent = skate.parafusos;
  
      const colunaPreco = linha.insertCell();
      colunaPreco.textContent = skate.preco;
      
      const colunaRemover = linha.insertCell();
      const botaoRemover = document.createElement('button');
      botaoRemover.textContent = 'Remover';
      botaoRemover.addEventListener('click', () => removerDoCarrinho(index));
      colunaRemover.appendChild(botaoRemover);
    });
  }
  
  function removerDoCarrinho(index) {
    carrinho.splice(index, 1);
    mostrarCarrinho();
  }
  
