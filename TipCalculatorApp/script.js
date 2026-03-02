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