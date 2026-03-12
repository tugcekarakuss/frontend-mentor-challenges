const form = document.querySelector("form")

const dayInput = document.querySelector("#day")
const monthInput = document.querySelector("#month")
const yearInput = document.querySelector("#year")

const dayError = document.querySelector("#day-error")
const monthError = document.querySelector("#month-error")
const yearError = document.querySelector("#year-error")

const daysSpan = document.querySelector("#days")
const monthsSpan = document.querySelector("#months")
const yearsSpan = document.querySelector("#years")

const inputGroups = document.querySelectorAll(".input-group")

function clearErrors() {
    inputGroups.forEach(group => {
        group.classList.remove("error")
    })
    dayError.textContent = ""
    yearError.textContent = ""
    monthError.textContent = ""
}

function showError(input, message, errorElement) {
    input.parentElement.classList.add("error")
    errorElement.textContent = message
}

function validate() {
    let isValid = true

    const day = parseInt(dayInput.value);
    const month = parseInt(monthInput.value);
    const year = parseInt(yearInput.value);

    const today = new Date()
    const birthDate = new Date(year, month - 1, day)

    if (!dayInput.value) {
        showError(dayInput, "This field is required", dayError)
        isValid = false
    }else if (day < 1 || day > 31) {
        showError(dayInput, "Must be a valid day", dayError)
    }

    if (!monthInput.value) {
        showError(monthInput, "This field is required", monthError)
        isValid = false
    }else if (month < 1 || month > 12) {
        showError(monthInput, "Must be a valid month", monthError)
        isValid = false
    }

    if (!yearInput.value) {
        showError(yearInput, "This field is required", yearError)
        isValid = false
    }else if (year < 0) {
        showError(yearInput, "Must be a valid year", yearError)
        isValid = false
    }

    if (!isValid) return false

    if (
        birthDate.getFullYear() !== year ||
        birthDate.getMonth() !== month - 1 ||
        birthDate.getDate() !== day
    ) {
        showError(dayInput, "Must be a valid date", dayError)
        return false
    }

    if (birthDate > today) {
        showError(yearInput, "Must be in the past", yearError)
        return false
    }
    return true
}

function calculateAge(e) {
    e.preventDefault()
    clearErrors()

    const isValid = validate()
    if (!isValid) return

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
