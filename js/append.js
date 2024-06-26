// console.log('append.js')
// 11111
const placesList = document.getElementById('places-list')

// 2222
const li = document.createElement('li');
li.innerText = 'pahadToli kkkk';

// 3333
placesList.appendChild(li);



const mainContainer = document.getElementById('main-container')
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'where are your from'
section.appendChild(h1)

const ul = document.createElement('ul')
const li1 = document.createElement('li');
li1.innerText = 'sylet'
ul.appendChild(li1);

const li2 = document.createElement('li')
li2.innerText = 'dhaka';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'noakhali';
ul.appendChild(li3);

section.appendChild(ul)

mainContainer.appendChild(section);