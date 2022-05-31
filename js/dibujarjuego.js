function dibujarhorca(pincel){

    pincel.strokeStyle = "#710a29";
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