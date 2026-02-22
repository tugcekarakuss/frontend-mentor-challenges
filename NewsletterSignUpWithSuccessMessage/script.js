const form = document.querySelector(".form")
const signupCard = document.querySelector("#signup-card")
const successCard = document.querySelector("#success-card")
const emailInput = document.querySelector("#email")
const userEmail = document.querySelector("#user-email")
const dismissBtn = document.querySelector("#dismiss-btn")
const errorMessage = document.querySelector(".form__error")
const regex = (/^[^\s@]+@[^\s@]+\.[^\s@]+$/)

function showError(){
    errorMessage.style.display="block"
    emailInput.classList.add("error")
}
function hideError(){
    errorMessage.style.display="none"
    emailInput.classList.remove("error")
}

form.addEventListener("submit", (e) => {
    const email=emailInput.value.trim()
    if (regex.test(email)) {
        signupCard.classList.add("hidden")
        successCard.classList.remove("hidden")
        userEmail.textContent = email
        hideError()
    }
    else{
        showError()
    } 
})
dismissBtn.addEventListener("click", () => {
        successCard.classList.add("hidden")
        signupCard.classList.remove("hidden")
        form.reset()
        hideError()
    })