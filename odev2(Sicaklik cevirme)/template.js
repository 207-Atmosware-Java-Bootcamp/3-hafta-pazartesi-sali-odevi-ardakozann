//ÖDEV-2
//Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
//Formül:(x*9/5)+32
convertToFahrenheit();

function convertToFahrenheit() {
    var temperatureValueInCelsius=inputDegree();
    var temperatureValueInFahrenheit=(temperatureValueInCelsius*1.8)+32;
    document.write("Celcius Temperature   : "+ temperatureValueInCelsius + '<br>');
    document.write("Fahrenheit Temperature: "+ temperatureValueInFahrenheit);
}

function inputDegree() {
    var temperatureValue;
    while(true){
        temperatureValue = Number (prompt("Sıcaklık derecesi giriniz:"));
        if(!isNaN(temperatureValue)){
            return temperatureValue;
        }
    }
}