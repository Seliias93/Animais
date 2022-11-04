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

//CLASSLIST
//Retorna uma lista com as classes do elemento. Permite adicionar, remover e verificar se contém.

const menu = document.querySelector('.menu');

menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes
menu.classList.remove('ativo');
menu.classList.toggle('ativo'); // adiciona/remove a classe
menu.classList.contains('ativo'); // true ou false
menu.classList.replace('ativo', 'inativo');


//ATTRIBUTES
//Retorna uma array-like com os atributos do elemento.

const animais7 = document.querySelector('.animais7');

animais.attributes; // retorna todos os atributos
animais.attributes[0]; // retorna o primeiro atributo

//GETATTRIBUTE E SETATTRIBUTE
//Métodos que retornam ou definem de acordo com o atributo selecionado

const imgs1 = document.querySelector('imgs1');
/*
img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
*/

img.hasAttributes(); // true / false se tem algum atributo

//É muito comum métodos de get e set;

//READ ONLY VS WRITABLE
//Existem propriedades que não permitem a mudança de seus valores, essas são considerados Read Only, ou seja, apenas leitura.

const animais6 = document.querySelector('.animais6');

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string

animais.attributes = 'class="ativo"'; // não funciona, read-only

//Lembre-se que podemos modificar o valor de uma propriedade objeto.propriedade = ''


//EXERCÍCIO
// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll('.menu a');

itensMenu.forEach((item )=>{ 
item.classList.add('ativo');
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

itensMenu.forEach((item )=>{ 
  item.classList.remove('ativo');
});
itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtibuto = img.hasAttribute('alt');
  console.log('img, possuiAtributo');
})
// Modifique o href do link externo no menu

const link = document.querySelectorAll('a[href^="http"]');
link.setAttribute('href', 'https:www.google.com/');