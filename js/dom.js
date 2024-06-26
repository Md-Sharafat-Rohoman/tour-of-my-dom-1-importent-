console.log('my name is sharafat rohoman')
console.log(document.body)

const liCollection = document.getElementsByTagName('li');
// console.log(liCollection)
for(const li of liCollection){
    console.log(li.innerText);
}

const allHeadings = document.getElementsByTagName('h1');
// console.log(allHeadings);
for(const h1 of allHeadings){
    console.log(h1.innerText);
}


const fruitsTitle = document.getElementById('fruits-title')
fruitsTitle.innerText = 'fruits changed by js';


const places = document.getElementsByClassName('importent-places');
// console.log(places);
for(const place of places){
    console.log(place.innerText);
}


const someLi = document.querySelectorAll('.fruits-container li');
// console.log(someLi);
for(const li of someLi){
    console.log(li.innerText)
}