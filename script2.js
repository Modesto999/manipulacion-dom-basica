
//se crean las constantes que se leen a partir del documento html

const h1= document.querySelector('h1');
const input1= document.querySelector('#calculo1');
const input2= document.querySelector('#calculo2');
const btn= document.querySelector('#btn-Calcular');
const presult= document.querySelector('#resultado');
const form=document.querySelector('#formulario');

//event listener para no tener codigo js en e html

//evento de calcular con el boton
//btn.addEventListener('click', sumarvalores);

//evneot de calcular con el form
form.addEventListener('submit', sumarvalores);

//eventos

function sumarvalores(event){
    //console.log({event});
    event.preventDefault();

    console.log(parseInt(input1.value) + parseInt(input2.value));
    const sumainputs=parseInt(input1.value) + parseInt(input2.value);
    presult.innerText= "Resultado es:  " + sumainputs;
}