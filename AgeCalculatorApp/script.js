const form = document.querySelector("form")
const dayInput = document.querySelector("#day")
const daysSpan = document.querySelector("#days")
const monthInput = document.querySelector("#month")
const monthsSpan = document.querySelector("#months")
const yearInput = document.querySelector("#year")
const yearSpan = document.querySelector("#years")
const inputGroup = document.querySelector(".input-group")
function calculateAge(e) {
    e.preventDefault()
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    
}
form.addEventListener("submit", calculateAge)
