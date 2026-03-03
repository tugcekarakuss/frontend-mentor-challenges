const billInput = document.querySelector("#bill")
const tipBtns = document.querySelectorAll(".tip-btn")
const customTipInput = document.querySelector(".custom-tip")
const peopleInput = document.querySelector("#people")
const errorMsg = document.querySelector("#people-error")
const tipAmountDisplay = document.querySelector("#tip-amount-person")
const totalPersonDisplay = document.querySelector("#total-person")
const resetBtn = document.querySelector(".reset-btn")

let bilValue = 0.0
let tipPercent = 0.0
let peopleValue = 1

billInput.addEventListener("input",()=>{
    bilValue=parseFloat(billInput.value)||0
    calculateTip()
})

peopleInput.addEventListener("input",()=>{
    peopleValue=parseInt(peopleInput.value)

    if(peopleValue<=0){
        errorMsg.style.visibility="visible"
        peopleInput.classList.add("input-error")
    }
    else{
        errorMsg.style.visibility="hidden"
        peopleInput.classList.remove("input-error")
        calculateTip()
    }
})
tipBtns.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        tipBtns.forEach(b=>b.classList.remove("active-tip"))
        e.target.classList.add("active-tip")

        tipPercent=parseFloat(e.target.value)
        customTipInput.value=""
        calculateTip()
    })
})
customTipInput.addEventListener("input",()=>{
    tipPercent=parseFloat(customTipInput.value)/100||0
    tipBtns.forEach(b=>b.classList.remove("active-tip"))
    calculateTip()
})
function calculateTip() {
    if (peopleValue >= 1) {
        let totalTip = bilValue * tipPercent
        let tipPerPerson = totalTip / peopleValue
        let totalPerPerson = (bilValue + totalTip) / peopleValue

        tipAmountDisplay.textContent = `$${tipPerPerson.toFixed(2)}`
        totalPersonDisplay.textContent = `$${totalPerPerson.toFixed(2)}`
    }
}

resetBtn.addEventListener("click",()=>{
    billInput.value=""
    peopleInput.value=""
    customTipInput.value=""
    tipAmountDisplay.textContent="$0.00"
    totalPersonDisplay.textContent="$0.00"

})

peopleInput.addEventListener("input", calculateTip)