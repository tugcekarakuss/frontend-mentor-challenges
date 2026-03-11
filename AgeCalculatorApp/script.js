const form = document.querySelector("form")

const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")

const daysSpan = document.querySelector("#days")
const monthsSpan = document.querySelector("#months")
const yearsSpan = document.querySelector("#years")

function calculateAge(e) {
    e.preventDefault()
    let day = parseInt(dayInput.value);
    let month = parseInt(monthInput.value);
    let year = parseInt(yearInput.value);

    const today = new Date()
    const birthDate = new Date(year, month - 1, day)

    let years = today.getFullYear() - birthDate.getFullYear()
    let months = today.getMonth() - birthDate.getMonth()
    let days = today.getDate() - birthDate.getDate()

    if (days < 0) {
        months--
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0)
        days += lastMonth.getDate()
    }
    if (months < 0) {
        years--
        months += 12
    }
    yearsSpan.textContent = years
    monthsSpan.textContent = months
    daysSpan.textContent = days

}
form.addEventListener("submit", calculateAge)
