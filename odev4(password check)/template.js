//ÖDEV-4 Kullanıcı tarafından aldığımız password ile repassword girilsin doğru ve yanlışı göstersin ?
login();

function login(){
    var sifre1=String(prompt("Şifre giriniz"));
    var sifre2=String(prompt("Doğrulamak için yeniden giriniz"));
    passwordCheck(sifre1,sifre2,passwordNullCheck);
}
function passwordNullCheck(password1,password2){//şifre boş mu kontrolü
    if(password1 == 'null' || password1 == "" || password2 == 'null' || password2 == ""){
        document.write("Şifre alanı boş geçilemez.");
        return false;
    }
    return true;
}
function passwordCheck(password1,password2,callback){ //şifre eşleşme kontrolü
    if(!callback(password1,password2)){return false;}
    if(password1==password2){
        document.write("Şifre doğru."+'<br>');
        document.write("Şifre: "+password1);
    }else{
        document.write("Şifre yanlış, yeniden deneyiniz."+'<br>');
        document.write("İlk girilen şifre   : "+password1+'<br>');
        document.write("İkinci girilen şifre: "+password2);
    }
}