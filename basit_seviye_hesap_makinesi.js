islem = Number(prompt(`1-Topla, 2-Çıkarma , 3-Çarpma , 4-Bölme`))
deger1 = Number (prompt('Sayi 1 değerini giriniz')) 
deger2 = Number( prompt('Sayi 2 değerini giriniz'))



function topla (){

    topla = Number (deger1+deger2) 
}

function cikar () {

    cikar= Number(deger1-deger2)
}

function bolme(){

    bolme= deger1/deger2 
}

function carpma(){

    carpma = deger1*deger2
}

cikar()
topla()
bolme()
carpma()


if(islem==1){

    alert(topla)
}

else if (islem==2){
alert(cikar)
}

else if (islem==3){

    alert(carpma)
}

else if (islem==4){

    alert(bolme)
}

else {
    alert('Hata. Tekrar deneyiniz.')
}