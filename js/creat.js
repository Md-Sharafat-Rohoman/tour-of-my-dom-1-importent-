// console.log('my name is sharafat rohoman')
const creat = document.createElement('p');
creat.innerText = 'sharafat rohoman is a good student';
console.log(creat.innerText)

const conatiner  = document.getElementById('place-container');
conatiner.appendChild(creat);

const content = conatiner.parentNode.parentNode.parentNode;
console.log(content)