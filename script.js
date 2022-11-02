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

const imgs = document.querySelectorAll('img')

let i = 0;
imgs.forEach(function(item, index)
{
    console.log(item, index)
});

const titulos = document.getElementsByClassName('titulo');
const titulosArray = Array.from(titulos);

titulosArray.forEach(function(item){
  console.log(item);
});


const imgs2 = document.querySelectorAll('imgs2');

imgs.forEach((item) => {
  console.log(item);
});

const imgs3 = document.querySelectorAll('img');

// parâmetro único não precisa de parênteses
imgs.forEach(item => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});



//EXERCÍCIO
// Mostre no console cada parágrado do site
const paragrafoss = document.querySelectorAll('p');
console.log(paragrafoss);

paragrafoss.forEach((item) =>{
    console.log(item);
});

// Mostre o texto dos parágrafos no console
paragrafoss.forEach((item) =>{
    console.log(item.in);
});

// Como corrigir os erros abaixo:
const imgs5 = document.querySelectorAll('img5');

imgs.forEach((item, index) => {
  console.log(item, index);
});

   /* let i = 0;
    imgs.forEach(() => {
    console.log(i++);
    });*/

imgs.forEach(() => i++);
