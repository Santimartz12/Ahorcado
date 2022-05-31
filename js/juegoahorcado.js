
//matriz con palabras
let palabras = ["HTML","PROGRAMACION","ALURA","JAVASCRIPT","FRONTEND","BACKEND","TRELLO","ORACLE","ONE","INDEX","GITHUB","COLOMBIA","CHALLENGES","DISCORD","CANVAS"];

var lienzo = document.querySelector("#dibujoahorcado");
var pincel = lienzo.getContext("2d");

//Dibujamos el ahorcado
//450 x 500
pincel.fillStyle = "#fcf3f7";
pincel.fillRect(0,0,450,500);

//Dibujar horca
dibujarhorca(pincel);


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