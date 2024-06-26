console.log('my name is sharafat rohoman')
const headers = document.getElementById('fruits-title');
headers.style.backgroundColor = 'green'
headers.style.color = 'white'
headers.style.borderRadius = '50px'
console.log(headers.innerText);

const sections = document.getElementsByTagName('section');
// console.log(sections);
for(const section of sections){
    // console.log(section)
    section.style.backgroundColor = 'green'
    section.style.borderRadius = '20px'
    section.style.padding = '20px'
    section.style.marginTop = '20px'
}

const fruitsss = document.getElementsByClassName('fruits-container');
console.log(fruitsss);
