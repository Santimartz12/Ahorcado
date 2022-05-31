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
    pincel.lineTo(315,450);
    pincel.stroke();
}

function dibujarlegder(pincel){
    pincel.beginPath();
    pincel.moveTo(345,338);
    pincel.lineTo(375,450);
    pincel.stroke();
}