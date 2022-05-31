
//matriz con palabras
let palabras = ["HTML","PROGRAMACION","ALURA","JAVASCRIPT","FRONTEND","BACKEND","TRELLO","ORACLE","ONE","INDEX","GITHUB","COLOMBIA","CHALLENGES","DISCORD","CANVAS"];

var lienzo = document.querySelector("#dibujoahorcado");
var pincel = lienzo.getContext("2d");

//Dibujamos el ahorcado
//450 x 500
pincel.strokeStyle = "#710a29";

//Dibujar horca
dibujarhorca(pincel);

//Dibujar cabeza
dibujarcabeza(pincel);

//Dibujar tronco
dibujartronco(pincel);

//Dibujar brazo izquierdo
dibujarbrzizq(pincel);

//Dibujar brazo derecho
dibujarbrzder(pincel);

//Dibujar pierna izquierda
dibujarlegizq(pincel);

//Dibujar pierna derecha
dibujarlegder(pincel);

//funcion para pedir la palabra ingresada anteriormente
function llamardatosstg(){
    var palabranueva = sessionStorage.getItem("palabra");
    return palabranueva;
}

var palabraaingresar = llamardatosstg();

if(palabraaingresar == null){
    console.log("no se ejecuta nada");
    console.log(palabras[(Math.round(Math.random()*(palabras.length - 1)))]);
}
else{

    console.log(palabras[(Math.round(Math.random()*(palabras.length - 1)))]);
    console.log(palabras);
    console.log(palabraaingresar);
    palabras.push(palabraaingresar);
    console.log(palabras);
    
}