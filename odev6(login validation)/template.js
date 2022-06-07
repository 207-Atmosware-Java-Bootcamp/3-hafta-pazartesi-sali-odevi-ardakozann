//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"
//ÖDEV-6
//Login userEmail,userPassword kullanıcıdan aldığımız değeri db ile karşılaştıracak eğer doğru ise adminFunction'a gönderecek 4 kalan haktan aşağı doğru düşecek eğer kalan hak sayımız 0 olursa kullanıcı bloke olsun
// dbUserEmail="deneme@gmail.com"
// dbUserPassword="root"
login();
function login(){
    dbUser=userInfoFromDb();//db den gelen bilgi
    userLogin={};
    for(var i=3; i>=0; i--){//4 kere şifre girme hakkı loopu
        userLogin.email=prompt("Email giriniz: ");
        userLogin.password=prompt("Şifre giriniz: ");
        if(dbUser.email == userLogin.email && dbUser.password == userLogin.password){
            alert("Giriş başarılı..");
            adminPage();
            return;
        }
        if(i==0){
            alert("Hesabınız bir süreliğine bloke edilmiştir. Daha sonra tekrar deneyiniz.");
        }else{
            alert("Yanlış e-posta veya şifre. Yeniden deneyiniz. Kalan deneme hakkı: "+i);
        }
    }
        
}

function adminPage(){
    document.write("Admin page");
}

function userInfoFromDb() {
    user={
        "email":"deneme@gmail.com",
        "password":"root"
    }
    return user;
}