function dibujarhorca(pincel){

    pincel.lineWidth = 10;
    pincel.beginPath();
    pincel.moveTo(5,490);
    pincel.lineTo(445,490);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(100,10);
    pincel.lineTo(100,490);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(100,15);
    pincel.lineTo(350,15);
    pincel.stroke();

    pincel.beginPath();
    pincel.moveTo(345,15);
    pincel.lineTo(345,100);
    pincel.stroke();

}

function dibujarcabeza(pincel){
    pincel.beginPath();
    pincel.arc(345,145,45,0,2*Math.PI);
    pincel.stroke();
}

function dibujartronco(pincel){
    pincel.beginPath();
    pincel.moveTo(345,195);
    pincel.lineTo(345,350);
    pincel.stroke();
}

function dibujarbrzizq(pincel){
    pincel.beginPath();
    pincel.moveTo(345,195);
    pincel.lineTo(295,280);
    pincel.stroke();
}

function dibujarbrzder(pincel){
    pincel.beginPath();
    pincel.moveTo(345,195);
    pincel.lineTo(395,280);
    pincel.stroke();
}

function dibujarlegizq(pincel){
    pincel.beginPath();
    pincel.moveTo(345,338);
    pincel.lineTo(305,450);
    pincel.stroke();
}

function dibujarlegder(pincel){
    pincel.beginPath();
    pincel.moveTo(345,338);
    pincel.lineTo(385,450);
    pincel.stroke();
}

//funcion para pedir la palabra ingresada
function llamardatosstg(){
    var palabranueva = sessionStorage.getItem("palabra");
    return palabranueva;
}

//Funcion de dibujar Horca
function horca(contadorerrores){

    pincel.strokeStyle = "#710a29";
    pincel.lineWidth = 10;
    //Dibujamos el ahorcado
    //450 x 500 pixeles

    if(contadorerrores == 1){
        //Dibujar horca
        dibujarhorca(pincel);
    }

    if(contadorerrores == 2){
        //Dibujar cabeza
        dibujarcabeza(pincel);
    }

    if(contadorerrores == 3){
        //Dibujar tronco
        dibujartronco(pincel);
    }

    if(contadorerrores == 4){
        //Dibujar brazo izquierdo
        dibujarbrzizq(pincel);
    }

    if(contadorerrores == 5){
        //Dibujar brazo derecho
        dibujarbrzder(pincel);
    }

    if(contadorerrores == 6){
        //Dibujar pierna izquierda
        dibujarlegizq(pincel);
    }

    if(contadorerrores == 7){
        //Dibujar pierna derecha
        dibujarlegder(pincel);
    }
}

//Logica de la horca
function logicahorca(palabrasecreta){
    var contadorerrores = 0;
    document.addEventListener("keydown",function(letraingresada){

        var letra = letraingresada.key;
        acierto = false;
        console.log(letra.toUpperCase());

        for(var i = 0;i<palabrasecreta.length;i++){
            if(letra.toUpperCase() == palabrasecreta[i]){
                console.log("Bien");
                acierto = true;
                break;
            }
            console.log(i);
        }

        if(acierto == false){
            contadorerrores++
            console.log("Fallaste");
        }

        horca(contadorerrores);
    })
}