
//matriz con palabras
let palabras = ["HTML","PROGRAMACION","ALURA","JAVASCRIPT","FRONTEND","BACKEND","TRELLO","ORACLE","ONE","INDEX","GITHUB","COLOMBIA","CHALLENGES","DISCORD","CANVAS"];

var lienzo = document.querySelector("#dibujoahorcado");
var pincel = lienzo.getContext("2d");

var palabrasecreta = (palabras[(Math.round(Math.random()*(palabras.length - 1)))]);
console.log(palabrasecreta);

var palabraaingresar = llamardatosstg();

//Si no se ingresó una palabra anteriormente, se ejecuta este código
if(palabraaingresar == null){
    console.log(palabras);
    logicahorca(palabrasecreta);
}
//Si se ingresó una palabra anteriormente, se ejecuta este código
else{
    palabras.push(palabraaingresar);
    console.log(palabras);
    logicahorca(palabrasecreta);
}