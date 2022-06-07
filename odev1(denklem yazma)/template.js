//ÖDEV-1
//<y=3x+4k> ==> 1.dereceden 2 bilinmyenli denklem
//Kullanıcı tarafından alınan x ve k değerlerini hesaplayan algoritma yazınız ?
makeEquation();

function makeEquation() {
    var valueX=inputNumber(), valueK=inputNumber();
    document.write("denklem => y=3x+4k <br>");
    document.write("x için girilen değer: "+ valueX + '<br>');
    document.write("k için girilen değer: "+ valueK + '<br>');
    document.write("y değeri: " + calculation(valueX,valueK));
}

function inputNumber(){
    var number;
    while(true){
        number = Number (prompt("y=3x+4k \nÖnce x için sonra k için değer giriniz."));
        if(!isNaN(number)){
            return number;
        }
    }
}

function calculation(valueX,valueK) {
    return 3*valueX + 4*valueK;
}