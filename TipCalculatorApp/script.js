const billInput=document.querySelector("#bill")
const tipBtns=document.querySelectorAll(".tip-btn")
const customTipInput=document.querySelector(".custom-tip")
const errorMsg=document.querySelector("#people-error")
const peopleInput=document.querySelector("#people")
const tipAmount=document.querySelector("#tip-amount-person")
const totalPerson=document.querySelector("#total-person")

function calculateTip(){
}


peopleInput.addEventListener("input",calculateTip)