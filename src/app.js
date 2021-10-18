console.log("Merhaba Dünya")

let dolarDun = 9.20   
let dolarBugun = 9.25

// let keywordu :
// {
//     let dolarDun = 9.10
// } eger leti farklı bir blockda kullansa iseydik blokdaki let degerini degilde 
// blockun dışındaki let degerini alırdı normal olarak peki var keywordu olarak alsaydık 
// blockdakinide alırdık buda kodda karmaşaya sebep olurduk.

console.log(dolarDun)  // js de kod bellekde yukardan aşşagıya dogru okunur
// bu yüzden ekrana yazdırılan kod tanımlanmada önce yazdırılmalıdır js hata vermez undifield
// der . yani tanımlanmadı .

// Örnegin var dolarDun hiç tanımlamasak nolur ? bu seferde undifield gene tanımlanmamış olur.

// js typesafe degildir . (ne tanımlarsan onu temsil eder .)

//Const Keyword : const ile atanan degere başka bir deger atanmaz const bi degerin sabit
// kalmasını saglar. Aşşagıdaki kod hata alır .

// const euroDun = 11            
// euroDun = 11                 

// console.log(euroDun)


//Birden Fazla Veriyi Kullanmak İçin Arraylerden Yararlanırız 

let konutKredileri = ["Konut Kredisi" , " Emlak Konut Kredisi" , " Kamu Konut Kredisi"]

// console.log(konutKredileri) //output ["Konut Kredisi" , " Emlak Konut Kredisi" , " Kamu Konut Kredisi"]

console.log("<ul>")
for (let i = 0; i < 3; i++) {
    console.log("<li>" + konutKredileri[i] + "</li>")   //html dilinde 
}
console.log("</ul>")



