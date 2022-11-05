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

img.hasAttributes(); // true // false se tem algum atributo

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
const img14 = document.querySelectorAll('img');

imgs.forEach((img) => {
  const possuiAtibuto = img.hasAttribute('alt');
  console.log('img, possuiAtributo');
})
// Modifique o href do link externo no menu

const link = document.querySelectorAll('a[href^="http"]');
link.setAttribute('href', 'https:www.google.com/');

//HEIGHT E WIDTH
//Estas são propriedades e métodos dos objetos Element e HTMLElement, a maioria delas são Read Only
const section = document.querySelector('.animais');

section.clientHeight; // height + padding
section.offsetHeight; // height + padding + border
section.scrollHeight; // height total, mesmo dentro de scroll

//Mesma coisa para o Width, clientWidth ...

//OFFSETTOP E OFFSETLEFT
const section = document.querySelector('.animais');

// Distância entre o topo do elemento e o topo da página
section.offsetTop;

// Distância entre o canto esquerdo do elemento
// e o canto esquerdo da página
section.offsetLeft;

//GETBOUNDINGCLIENTRECT()
//Método que retorna um objeto com valores de width, height, distâncias do elemento e mais.
const section = document.querySelector('.animais');

const rect = section.getBoundingClientRect();
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll

//WINDOW

window.innerWidth; // width do janela
window.outerWidth; // soma dev tools também
window.innerHeight; // height do janela
window.outerHeight; // soma a barra de endereço

window.pageYOffset; // distância total do scroll vertical
window.pageXOffset; // distância total do scroll horizontal

if(window.innerWidth < 600) {
  console.log('Tela menor que 600px');
}


//MATCHMEDIA();
//Utilize um media-querie como no CSS para verificar a largura do browser

const small = window.matchMedia('(max-width: 600px)');

if(small.matches) {
  console.log('Tela menor que 600px')
} else {
  console.log('Tela maior que 600px')
}


/*DICA
Selecione o elemento no inspetor (dom)

Abra o console e digite $0 para selecionar o mesmo

Os elementos selecionados anteriormente são $1, $2 ...*/ 

//EXERCÍCIO

// Verifique a distância da primeira imagem
// em relação ao topo da página
const img = document.querySelector('copy');
const imgTop = img.offsetTop;

console.log(imgTop);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imagens = document.querySelectorAll('img');
  let soma = 0;
  imagens.forEach((imagem) =>{
    soma = soma + imagem.offsetWidth;
  });

  console.log(soma);
}

window.onload = function(){
  somaImagens();
}

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const.forEach((link) =>{
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 40 && linkHeight >= 48){
    console.log(link, 'Possui boa acessibilidade')
  }else(
    console.log(link, 'Nao possui boa acessibilidade')
  )
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia('(max-width: 720px)').matches;

if(browserSmall){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
}

//ADDEVENTLISTENER
//Adiciona uma função ao elemento, esta chamada de callback, que será ativada assim que certo evento ocorrer neste elemento.

const img = document.querySelector('img');

// elemento.addEventListener(event, callback, options)
img.addEventListener('click', function() {
  console.log('Clicou');
})

//O terceiro parâmetro é opcional.

//CALLBACK
//É boa prática separar a função de callback do addEventListener, ou seja, declarar uma função ao invés de passar diretamente uma função anônima

const img = document.querySelector('img');
function callback() {
  console.log('Clicou');
}

img.addEventListener('click', callback); // 🚀
img.addEventListener('click', callback()); // undefined
img.addEventListener('click', function() {
  console.log('Clicou');
})
img.addEventListener('click', () => {
  console.log('Clicou');
})

//EVENT
//O primeiro parâmetro do callback é referente ao evento que ocorreu.

const img = document.querySelector('img');

function callback(event) {
  console.log(event);
}

img.addEventListener('click', callback);

//Geralmente utilizam e como nome do parâmetro

//PROPRIEDADES DO EVENT

const animaisLista = document.querySelector('.animais-lista');

function executarCallback(event) {
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o clique ocorreu
  const type = event.type; // tipo de evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}

animaisLista.addEventListener('click', executarCallback);

//EVENT.PREVENTDEFAULT()
//Previne o comportamento padrão do evento no browser. No caso de um link externo, por exemplo, irá previnir que o link seja ativado.

const linkExterno = document.querySelector('a[href^="http"]');

function clickNoLink(event) {
  event.preventDefault();
  console.log(event.currentTarget.href);
}

linkExterno.addEventListener('click', clickNoLink);

//THIS
//A palavra chave this é uma palavra especial de JavaScript, que pode fazer referência a diferentes objetos dependendo do contexto. No caso de eventos, ela fará referência ao elemento em que addEventListener foi adicionado.

const img = document.querySelector('img');

function callback(event) {
  console.log(this); // retorna a imagem
  console.log(this.getAttribute('src'));
}

img.addEventListener('click', callback);

//Geralmente igual ao event.currentTarget

//DIFERENTES EVENTOS
//Existem diversos eventos como click, scroll, resize, keydown, keyup, mouseenter e mais. Eventos podem ser adicionados a diferentes elementos, como o window e document também.

const h1 = document.querySelector('h1');

function callback(event) {
  console.log(event.type, event);
}

h1.addEventListener('click', callback);
h1.addEventListener('mouseenter', callback);
window.addEventListener('scroll', callback);
window.addEventListener('resize', callback);
window.addEventListener('keydown', callback);


//KEYBOARD
//Você pode adicionar atalhos para facilitar a navegação no seu site, através de eventos do keyboard.

function handleKeyboard(event) {
  if(event.key === 'a')
    document.body.classList.toggle('azul');
  else if(event.key === 'v')
    document.body.classList.toggle('vermelho');
}

window.addEventListener('keydown', handleKeyboard);


//FOREACH E EVENTOS
//O método addEventListener é adicionado à um único elemento, então é necessário um loop entre elementos de uma lista, para adicionarmos à cada um deles.

const imgs = document.querySelectorAll('img');

function imgSrc(event) {
  const src = event.currentTarget.getAttribute('src');
  console.log(src);
}

imgs.forEach((img) => {
  img.addEventListener('click', imgSrc);
});

//EXERCÍCIO

// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links


// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados


// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento


// Se o usuário clicar na tecla (t), aumente todo o texto do site. 
