//ÖDEV-3 verilen bir sayının negatif mi pozitif mi olduğunu bulan algoritma ?
checkNumber();

function checkNumber() {
    var number=inputNumber();
    if(number > 0){
        document.write(number + " sayısı pozitif bir sayıdır.");
    }else{
        document.write(number + " sayısı negatif bir sayıdır.");
    }
}

function inputNumber() {
    var number;
    while(true){
        number = Number (prompt("Sayı giriniz(0 hariç): "));
        if(!isNaN(number) && number != 0){
            return number;
        }
    }
}