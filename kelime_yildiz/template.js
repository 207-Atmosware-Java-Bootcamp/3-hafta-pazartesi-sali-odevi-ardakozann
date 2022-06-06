////Kullanıcıdan aldığımız verinin ilk harfi ve son harfi görünsün geriye kalan karakter kadar * (yıldız) olsun ==> Alınan örneğin Hamit  ==>  H***t

editName();

function editName(){
    var name = inputName();
    var temp1=name.substring(1,name.length-1);//replace yapmak ve yıldız sayısı öğrenmek için
    var asterisk = createAsterisk(temp1.length);//ilk ve son harf hariç harf sayısı kadar yıldız olan string
    var editName= name.replace(temp1,asterisk);//fonksiyona gönderilen isimin yıldızlanmış hali
    document.write(editName);
}

function inputName(){
    var name;
    while(true){
        name = String (prompt("Kelime giriniz (En az 3 harfli olmalıdır):"));
        if(name.length >=3 && name != "null" && name != "" && !name.includes("1") && !name.includes("2") && !name.includes("3") && !name.includes("4") && !name.includes("5") && !name.includes("6") 
        && !name.includes("7") && !name.includes("8") && !name.includes("9") && !name.includes("0") ){
            name = name.trim();
            return name;
        }
    }
}

function createAsterisk(number){
    this.number=Number(number);
    var asterisk="*";
    for(var i=1; i<number; i++){
        asterisk=asterisk.concat('*');
    }
    return asterisk;
}

