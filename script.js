const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');
console.log(gridSection[1])

const primeiraLI = document.querySelector('li');
console.log(primeiraLI)

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]')
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[1]);

const gridSectionHtml = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

console.log(gridSectionHtml);
console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index)
{
    console.log(item);
});

const arrayGrid = Array.from(gridSectionHtml);

arrayGrid.forEach(function(item)
{
console.log(item);
});

//EXERCÍCIO
// Retorne no console todas as imagens do site

const img = document.querySelectorAll('img');
console.log(img);

// Retorne no console apenas as imagens que começaram com a palavra imagem

const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais);

// Selecione todos os links internos (onde o href começa com #)

const linkInternos = document.querySelectorAll('[href^="#"]')
console.log(linkInternos);

// Selecione o primeiro h2 dentro de .animais-descricao
const h2Animais = document.querySelector('.animais-descricao h2');
console.log(h2Animais)
// Selecione o último p do site

const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[--paragrafos.length]);
