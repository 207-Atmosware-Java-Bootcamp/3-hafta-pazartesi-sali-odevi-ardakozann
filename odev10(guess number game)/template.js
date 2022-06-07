//ÖDEV-10
//Sayı bulma oyunu: 1-10 arasında rastgele sayılar olsun bizde tahmin etmeye çalışalım bizim tahmin sayımız 5 olsun eğer biz sayıdan büyükse büyük tahmin eğer sayıdan küçükse küçük tahmin. ve sonunda eğer bulursak kaçıncı tahminde bulduğumuz bize söylesin ?
game();

function game() {
    var randomNumber=Math.floor(Math.random() * 10) + 1, number, numbersOfGuess=[];
    while(true){
        number=inputNumber();
        numbersOfGuess.push(number);
        if(number > randomNumber){
            alert("Tahmin, sayıdan büyük.");
        }
        else if(number < randomNumber){
            alert("Tahmin, sayıdan küçük");
        }
        else{
            document.write("Tebrikler. Tahmin edilen sayı: "+ randomNumber + '<br>');
            document.write("Girilen sayılar: "+ numbersOfGuess + '<br>');
            document.write(numbersOfGuess.length + ". denemede sayı bulundu.");
            break;
        }
    }
}

function inputNumber(){
    var number;
    while(true){
        number = Number (prompt("1 ile 10 arasında bir sayı giriniz (Ondalık sayılar tam sayıya çevirilecektir."));
        if(!isNaN(number) && number >= 1 && number <= 10){
            number = parseInt(number);
            return number;
        }
    }
}