function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoDeUsuario(){
    alert('Clic desde el boton');
}

asignarTextoElemento('h1','Juego del numero secreto!');
asignarTextoElemento('p','Indica un numero del 1 al 10');