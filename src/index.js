// h1 { color: red ..... }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(input.placeholder);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

h1.innerHTML = 'Patito <br> Feo';
h1.innerText = 'Patito <br> Feo';
// console.log(h1.getAttribute('class'));
// h1.setAttribute('class', 'rojo');

h1.classList.add('verde');
h1.classList.remove('samsung');
// h1.classList.toggle('samsung');
// h1.classList.contains('samsung');

input.value = 'andres'

const img = document.createElement('img');

img.setAttribute('src', 'https://st2.depositphotos.com/1006009/7379/i/950/depositphotos_73791713-stock-photo-it-is-a-great-day.jpg');
img.width = 200;
console.log(img);

pid.append(img);