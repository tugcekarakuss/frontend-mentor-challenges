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
        ratingBtns.forEach(b => {
            b.classList.remove("active")
            b.setAttribute("aria-pressed", "false")
        })

        btn.classList.add("active")
        btn.setAttribute("aria-pressed", "true")
        ratingState.selectedRate = btn.value
        ratingValue.textContent = btn.value
    })
})

form.addEventListener("submit", (e) => {
    e.preventDefault()
    if (!(ratingState.selectedRate)) return
    rateCard.classList.add("hidden")
    rateCard.setAttribute("aria-hidden", "true")

    thankyouCard.classList.remove("hidden")
    thankyouCard.setAttribute("aria-hidden", "false")
})

