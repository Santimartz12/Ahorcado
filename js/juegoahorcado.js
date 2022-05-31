
//matriz con palabras
let palabras = ["HTML","PROGRAMACION","ALURA","JAVASCRIPT","FRONTEND","BACKEND","TRELLO","ORACLE","ONE","INDEX","GITHUB","COLOMBIA","CHALLENGES","DISCORD","CANVAS"];

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
