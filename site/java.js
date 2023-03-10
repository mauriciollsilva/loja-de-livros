// Selecionando o formulário
const form = document.querySelector('#form-livro');

// Selecionando o container de livros
const livrosContainer = document.querySelector('#livros-container');

// Adicionando um ouvinte de evento de envio de formulário
form.addEventListener('submit', function(e) {
  e.preventDefault(); // Previne o envio do formulário

  // Selecionando os campos do formulário
  const titulo = document.querySelector('#titulo');
  const autor = document.querySelector('#autor');
  const descricao = document.querySelector('#descricao');

  // Criando um novo elemento de livro
  const novoLivro = document.createElement('li');

  // Adicionando o título do livro
  const tituloLivro = document.createElement('h4');
  tituloLivro.textContent = titulo.value;
  novoLivro.appendChild(tituloLivro);

  // Adicionando o autor do livro
  const autorLivro = document.createElement('p');
  autorLivro.textContent = `Autor: ${autor.value}`;
  novoLivro.appendChild(autorLivro);

  // Adicionando a descrição do livro
  const descricaoLivro = document.createElement('p');
  descricaoLivro.textContent = `Descrição: ${descricao.value}`;
  novoLivro.appendChild(descricaoLivro);

  // Adicionando um botão de remover
  const botaoRemover = document.createElement('button');
  botaoRemover.textContent = 'Remover';
  botaoRemover.addEventListener('click', function() {
    livrosContainer.removeChild(novoLivro);
  });
  novoLivro.appendChild(botaoRemover);

  // Adicionando o novo elemento de livro ao container de livros
  livrosContainer.appendChild(novoLivro);

  // Limpando os campos do formulário
  titulo.value = '';
  autor.value = '';
  descricao.value = '';
});
