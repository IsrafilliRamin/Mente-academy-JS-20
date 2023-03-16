let malinQiymeti = document.querySelectorAll(".malinQiymeti");
let sayi = document.querySelectorAll(".sayi");
let cemi = document.querySelectorAll(".cemi");
let increment = document.querySelectorAll(".incrment");
let decrement = document.querySelectorAll(".decrement");
let umumiSay = document.querySelector(".umumiSay");
var cem = 0;
let YeniCem = 0;

let delet = document.querySelectorAll(".fa-trash");
const container = document.querySelectorAll(".container");
let saleProduct = document.querySelector(".saleProduct");
const yekunQiymet = document.querySelector(".Yekun-qiymet");



for (let i = 0; i < increment.length; i++) {
  cemi[i].innerHTML = malinQiymeti[i].textContent;
  YeniCem = parseInt(cemi[i].textContent) + YeniCem;

  umumiSay.innerHTML = YeniCem;
  let count = 1;

  yekunQiymet.innerHTML =
    umumiSay.textContent -
    (umumiSay.textContent * parseFloat(saleProduct.textContent)) / 100;

  decrement[i].addEventListener("click", (event) => {
    count--;
    let decEvent = event.target;

    decEvent.parentNode.nextElementSibling.children[1].textContent;

    let malinQiymetiDec =
      decEvent.parentNode.previousElementSibling.children[1].textContent;

    LastValue = 0;
    LastValue = LastValue - parseInt(malinQiymetiDec);

    if (count <= 0) {
      count = 0;
      container[i].style.display = "none";
      umumiSay.innerHTML = parseInt(umumiSay.textContent) + LastValue;
      yekunQiymet.innerHTML =
        umumiSay.textContent -
        (umumiSay.textContent * parseFloat(saleProduct.textContent)) / 100;
    } else {
      sayi[i].innerHTML = count;
      cemi[i].innerHTML = malinQiymetiDec * count;
      umumiSay.innerHTML = parseInt(umumiSay.textContent) + LastValue;
      yekunQiymet.innerHTML =
        umumiSay.textContent -
        (umumiSay.textContent * parseFloat(saleProduct.textContent)) / 100;
    }
  });

  increment[i].addEventListener("click", (event) => {
    count++;

    sayi[i].innerHTML = count;
    let conta = event.target;
    let YeniMalinQiymeti =
      conta.parentNode.previousElementSibling.children[1].textContent;
    conta.parentNode.nextElementSibling.nextElementSibling.children[1]
      .textContent;

    cem = YeniMalinQiymeti * count;
    cemi[i].innerHTML = cem;

    LastValue = 0;
    LastValue = parseInt(YeniMalinQiymeti) + LastValue;
    umumiSay.innerHTML = parseInt(umumiSay.textContent) + LastValue;

    yekunQiymet.innerHTML =
      umumiSay.textContent -
      (umumiSay.textContent * parseFloat(saleProduct.textContent)) / 100;
  });

  delet[i].addEventListener("click", (event) => {
    let delEvent = event.target;

    let eventCem =
      delEvent.parentNode.previousElementSibling.children[1].textContent;

    container[i].remove();
    umumiSay.innerHTML = parseInt(umumiSay.textContent) - eventCem;
    yekunQiymet.innerHTML =
      umumiSay.textContent -
      (umumiSay.textContent * parseFloat(saleProduct.textContent)) / 100;
  });
}

let LastValue = 0;
























/* let newPrice = 200;
cemi.innerHTML = newPrice
malinQiymeti.innerHTML = newPrice;
let newCount = 1;
sayi.innerHTML = newCount; */

/* increment.addEventListener("click",()=>{
    newCount ++ ;
    sayi.innerHTML = newCount;
    cemi.innerHTML = newPrice * newCount

    if(newCount > 1){
        decrement.removeAttribute("disabled");
        decrement.style.backgroundColor = "green"
    }

}) */

/* 
decrement.addEventListener("click",()=>{
    

    if(newCount <= 1){
        decrement.setAttribute("disabled","")
        decrement.style.backgroundColor = "gray"
        newCount = 1;
       
    }else{
        newCount -- ;
        sayi.innerHTML = newCount;
        cemi.innerHTML = newPrice * newCount
    }

})

 */
