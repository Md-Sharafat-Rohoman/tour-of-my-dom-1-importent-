// console.log('inner html')
const mainContainer = document.getElementById('main-container');
const section  = document.createElement('section');
section.innerHTML = `
<h>my name is sharafat rohoman</h>
<p>old is gold</p>
`

mainContainer.appendChild(section);