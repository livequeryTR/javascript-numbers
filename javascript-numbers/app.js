//! RANDOM BG COLOR PROJESİ TAMAMLANDI
// const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// const btn = document.querySelector("#btn");
// const divColor = document.querySelector(".color");

// btn.addEventListener("click", function(){
//     let hash = "#";
//     for(let i = 0; i<6; i++){
//         hash += colors[getRandomNumber()];
//     }
    

//     divColor.textContent = hash;
//     document.body.style.backgroundColor = hash;
// });

// function getRandomNumber(){
//     return Math.floor(Math.random() * colors.length);
// }
//! RANDOM BG COLOR PROJESİ TAMAMLANDI









//? ------------------------------------------------- Sayı Arttırma Programı
let arttir = document.querySelector("#arttir");
let azalt = document.querySelector("#azalt");
let sifirla = document.querySelector("#sifirla");
let guncelSayi = 0;

function kosulKodlari(){
    if(guncelSayi == 0){
        document.body.style.color = "black";
    } else if(guncelSayi <= -1){
        document.body.style.color = "red";
    } else if (guncelSayi >= 1){
        document.body.style.color = "green";
    }
    
}

arttir.addEventListener("click",function(){
    let artanSayi = document.querySelector("#artanSayi").innerHTML = guncelSayi+=1
    kosulKodlari();
});

azalt.addEventListener("click",function(){
    let azalanSayi = document.querySelector("#artanSayi").innerHTML = guncelSayi-=1
    kosulKodlari();
});

sifirla.addEventListener("click",function(){
    let sifirlananSayi = document.querySelector("#artanSayi").innerHTML = guncelSayi=0
    kosulKodlari();
});



