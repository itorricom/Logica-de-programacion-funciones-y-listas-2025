let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){
    alert('Clic desde el boton');
}

function generarNumeroSecreto(){
    return Math.floor(Math.random() * 10) + 1;
}

asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');