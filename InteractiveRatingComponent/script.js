const form = document.querySelector("form")
const ratingBtns = document.querySelectorAll(".card__rating")
const ratingValue = document.querySelector("#rating")
const rateCard = document.querySelector("#rate-card")
const thankyouCard = document.querySelector("#thankyou-card")

const ratingState = {
    selectedRate: null
}

ratingBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        ratingBtns.forEach(b => b.classList.remove("active"))
        btn.classList.add("active")
        ratingState.selectedRate = btn.value
        ratingValue.textContent = btn.value
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!(ratingState.selectedRate)) return
    rateCard.classList.add("hidden")
    thankyouCard.classList.remove("hidden")
})

