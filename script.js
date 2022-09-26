// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerText='patoneamarillo <br> cucha';

// leemos los atributos
//console.log(h1.getAttribute('class'));
//cambiamos el atributo
//h1.setAttribute('class', 'pirinola');

h1.classList.add('guadaluipe');
h1.classList.remove('guadaluipe');

input.value="456";

const img= document.createElement('img');
img.setAttribute('src','https://images.pexels.com/photos/120049/pexels-photo-120049.jpeg?cs=srgb&dl=pexels-mike-b-120049.jpg&fm=jpg');
console.log(img);

//pid.append(img);


//trabajito 11111111

