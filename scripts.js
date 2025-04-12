// Pegando os elementos do HTML
const botaoVerde = document.querySelector('.verde');
const botaoAzul = document.querySelector('.azul');
const botaoRosa = document.querySelector('.rosa');
const imagemTenis = document.querySelector('.imagem-tenis');
const botaoCarrinho = document.querySelector('.botao-carrinho');
const fundo = document.querySelector('.fundo');


// Quando clicar no botão verde, muda para a imagem nike1.png (verde)
botaoVerde.addEventListener('click', () => {
    imagemTenis.src = 'img/nike1.png';
    fundo.style.backgroundColor = '#ccee66';
    botaoCarrinho.style.backgroundColor = '#ccee66'; //verde

});

// Quando clicar no botão azul, muda para a imagem nike2.png (azul)
botaoAzul.addEventListener('click', () => {
    imagemTenis.src = 'img/nike2.png';
    fundo.style.backgroundColor = '#58cced';
    botaoCarrinho.style.backgroundColor = '#58cced'; //azul
});

// Quando clicar no botão rosa, muda para a imagem nike3.png (rosa)
botaoRosa.addEventListener('click', () => {
    imagemTenis.src = 'img/nike3.png';
    fundo.style.backgroundColor = '#ff9eb5';
    botaoCarrinho.style.backgroundColor = '#ff9eb5'; //rosa
});
