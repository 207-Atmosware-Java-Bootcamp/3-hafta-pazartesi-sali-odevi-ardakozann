//bilgisayar tarafından rastgele oluşturulmuş kullanıcı tarafından bitiş
//sayısına göre sayılar oluşturulsun
//bu sayıları bir diziye atama yapalım
//bu sayılardan ilk eleman
//bu sayılardan son eleman
//bu sayıların küçükten büyüğe sıralama
//bu sayıların büyükten küçüğe sıralama
//bu sayıların toplamları
//bu sayıların çift sayı toplamları
//bu sayıların tek sayı toplamları
//bu sayıların her birine 1 ekleyerek yeni bir dizi oluşturma

numbers();

function numbers(){
    var length=inputNumber();
    var array=new Array(length); //dizi
    var arrayPlusOne=new Array(length); //1 artırılmış dizi
    var total=0; //dizi elemanlarının toplamı
    var totalEven=0; //dizi elemanlarından çift olanların toplamı
    var totalOdd=0; //dizi elemanlarından tek olanların toplamı
    
    for (var i=0; i<array.length; i++){
        array[i]=Math.floor(Math.random() * 10);
        arrayPlusOne[i]=array[i]+1;
        if(array[i]%2==0){//Çift
            totalEven+=array[i];
        }
        else{
            totalOdd+=array[i];
        }
        total+=array[i];
    }
    document.write("Dizi: "+array+'<br>');
    document.write("İlk eleman: "+array[0]+'<br>');
    document.write("Son eleman: "+array[array.length-1]+'<br>');
    document.write("Küçükten büyüğe sıralama: "+array.sort()+'<br>');
    document.write("Büyükten küçüğe sıralama: "+array.sort().reverse()+'<br>');
    document.write("Dizi toplamı: "+total+'<br>');
    document.write("Dizideki çift sayıların toplamı: "+totalEven+'<br>');
    document.write("Dizideki tek sayıların toplamı: "+totalOdd+'<br>');
    document.write("Dizi elemanlarının 1 artırılmış görünümü: "+arrayPlusOne+'<br>');
}

function inputNumber(){
    var number;
    while(true){
        number = Number (prompt("Dizi boyutunu giriniz (1'den küçük veya null değer girelemez.):"));
        if(number > 0 && number != null){
            return number;
        }
    }
}